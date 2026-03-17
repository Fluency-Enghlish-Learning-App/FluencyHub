import { Course } from "../constants";
import { CacheService } from "./cacheService";

/**
 * Service to fetch course metadata from remote exported folders.
 */
export class CourseService {
  /**
   * Fetches Course.json from a remote base URL and resolves its assets.
   * @param baseUrl URL of the exported course folder (should end with /)
   * @param overrideZipUrl Optional direct zip link if discovery knows it
   */
  static async fetchCourse(
    baseUrl: string,
    overrideZipUrl?: string,
  ): Promise<Course | null> {
    const cacheKey = `course_${baseUrl}`;
    const cached = CacheService.get<Course>(cacheKey);
    if (cached) return cached;

    try {
      const url = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

      const searchFiles = ["course.json", "Course.json", "metadata.json"];
      let response;

      for (const file of searchFiles) {
        const res = await fetch(`${url}${file}`);
        if (res.ok) {
          response = res;
          break;
        }
      }

      if (!response) {
        throw new Error(`Failed to fetch metadata from ${url}`);
      }

      const rawData = await response.json();

      // Resolve absolute image URL
      let imageUrl = rawData.imageUrl || "";
      if (imageUrl && !imageUrl.startsWith("http")) {
        imageUrl = `${url}${imageUrl}`;
      }

      // Resolve Zip URL if not provided
      let zipUrl = overrideZipUrl;
      if (!zipUrl) {
        // Fallback guess: if we have a zip file in the same folder
      }

      // Map to Hub's Course interface
      const course: Course = {
        id: rawData.id || baseUrl,
        title: rawData.title || "Untitled Course",
        sub: rawData.description || "",
        lessons: rawData.lessonCount || rawData.lessons || 0,
        pts: rawData.pts,
        level: rawData.level || "All Levels",
        tag: rawData.tag || "English",
        tagColor: rawData.tagColor || "#3b82f6",
        img: imageUrl,
        zipUrl: zipUrl,
        isNew: rawData.isNew,
        rating: rawData.rating,
        students: rawData.students,
        version: rawData.version,
        author: rawData.author,
        adapter: rawData.adapter,
        publisher: rawData.publisher,
        skills: rawData.skills,
        downloadUrl: rawData.downloadUrl,
      };

      CacheService.set(cacheKey, course);
      return course;
    } catch (error) {
      console.error(
        `[CourseService] Error fetching course from ${baseUrl}:`,
        error,
      );
      return null;
    }
  }

  /**
   * Discovers all courses using a Cloudflare Pages registry file (courses.json).
   * Falls back to direct GitHub discovery if Pages is not available.
   */
  static async discoverCourses(
    pagesUrls: string[],
    githubRepo: string,
  ): Promise<Course[]> {
    const cacheKey = "discovery_results";
    const cached = CacheService.get<Course[]>(cacheKey);
    if (cached) return cached;

    try {
      // 1. Try to fetch the registry from all Cloudflare Pages sources in parallel
      const discoveryPromises = pagesUrls.map(async (rawUrl) => {
        const url = rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`;
        const response = await fetch(`${url}courses.json`);
        if (!response.ok) return [];

        const folderNames = await response.json();
        if (!Array.isArray(folderNames)) return [];

        const coursePromises = folderNames.map(async (folder) => {
          const encodedFolder = folder
            .split("/")
            .map((p: string) => encodeURIComponent(p))
            .join("/");
          const courseBaseUrl = `${url}${encodedFolder}/`;
          const folderName = folder.split("/").pop() || "";

          return this.fetchCourse(
            courseBaseUrl,
            `${courseBaseUrl}${folderName}.zip`,
          );
        });

        const results = await Promise.all(coursePromises);
        return results.filter((c): c is Course => c !== null);
      });

      const allResults = await Promise.all(discoveryPromises);
      const merged = allResults.flat();

      if (merged.length > 0) {
        // Remove duplicates by ID
        const unique = Array.from(
          new Map(merged.map((c) => [c.id, c])).values(),
        );
        CacheService.set(cacheKey, unique);
        return unique;
      }
    } catch (error) {
      console.warn("[CourseService] Pages discovery failed:", error);
    }

    // 2. Fallback to direct GitHub discovery
    try {
      const apiResp = await fetch(
        `https://api.github.com/repos/${githubRepo}/contents/`,
      );
      if (!apiResp.ok) throw new Error("GitHub API failed");
      const contents = await apiResp.json();
      const folders = contents.filter(
        (item: any) => item.type === "dir" && !item.name.startsWith("."),
      );
      const promises = folders.map(async (f: any) => {
        const baseUrl = `https://raw.githubusercontent.com/${githubRepo}/main/${f.path}/`;
        return this.fetchCourse(baseUrl);
      });
      const results = await Promise.all(promises);
      return results.filter((c): c is Course => c !== null);
    } catch (e) {
      console.error("[CourseService] All discovery methods failed:", e);
      return [];
    }
  }

  /**
   * Fetches multiple courses in parallel.
   */
  static async fetchAllCourses(urls: string[]): Promise<Course[]> {
    const promises = urls.map((url) => this.fetchCourse(url));
    const results = await Promise.all(promises);
    // Filter out failed fetches
    return results.filter((c): c is Course => c !== null);
  }
}
