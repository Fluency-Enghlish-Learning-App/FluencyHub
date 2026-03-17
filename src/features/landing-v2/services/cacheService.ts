export class CacheService {
  private static readonly DEFAULT_TTL = 3600000; // 1 hour in ms

  /**
   * Saves data to localStorage with a timestamp.
   */
  static set(key: string, data: any, ttl: number = this.DEFAULT_TTL): void {
    try {
      const entry = {
        data,
        expiry: Date.now() + ttl,
      };
      localStorage.setItem(`fluency_cache_${key}`, JSON.stringify(entry));
    } catch (e) {
      console.warn("[CacheService] Failed to save cache:", e);
    }
  }

  /**
   * Retrieves data from localStorage if it hasn't expired.
   */
  static get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(`fluency_cache_${key}`);
      if (!raw) return null;

      const entry = JSON.parse(raw);
      if (Date.now() > entry.expiry) {
        localStorage.removeItem(`fluency_cache_${key}`);
        return null;
      }

      return entry.data as T;
    } catch (e) {
      console.warn("[CacheService] Failed to read cache:", e);
      return null;
    }
  }

  /**
   * Clears a specific cache entry.
   */
  static remove(key: string): void {
    localStorage.removeItem(`fluency_cache_${key}`);
  }

  /**
   * Clears all fluency related cache.
   */
  static clearAll(): void {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("fluency_cache_"))
      .forEach((key) => localStorage.removeItem(key));
  }
}
