import cambridgeImage from "@/assets/course/Cambridge_IELTS_18.jpg";

export const coursesData = [
  {
    id: 1,
    title: "Cambridge IELTS 18",
    author: "Cambridge University Press",
    level: "All Levels", // Keeping level for compatibility if needed, or can derive/remove
    imageUrl: cambridgeImage, // mapped from image to imageUrl as per JSON, but code uses 'image' currently. Will update code to use imageUrl or map here. Let's use imageUrl in data but might need to update components.
    // Actually, to minimize component breakage first, I'll map JSON fields to existing ones or add new ones.
    // The user provided: imageUrl, adapter, pageCount, publisher, publicationYear, skill, shortDescription, fullDescription, targetAudience
    image: cambridgeImage, // Keeping 'image' for broader compatibility if other components use it, but setting value.
    rating: 4.9,
    students: "10M+",
    lessons: 4,
    downloadUrl:
      "https://www.mediafire.com/file/6owkefhbidwsdz5/Cambridge_IELTS_18.zip/file",

    // New fields
    adapter: "KhanhRomVN",
    pageCount: 144,
    publisher: "Cambridge University Press",
    publicationYear: 2023,
    skill: ["Listening", "Reading", "Writing", "Speaking"],
    shortDescription: "The latest official Cambridge IELTS practice tests.",
    fullDescription:
      "Authentic examination papers from Cambridge Assessment English provide perfect practice because they are EXACTLY like the real test. Inside IELTS 18 with Answers with Audio you will find FOUR complete examination papers plus details of the different parts of the test and the scoring system, so you can familiarise yourself with the test format and practise your exam technique.",
    targetAudience: "vi",

    // Existing fields for compatibility (optional, but good to keep structure valid)
    description: "The latest official Cambridge IELTS practice tests.", // mapped from shortDescription
    features: [
      "Authentic examination papers",
      "Perfect practice",
      "EXACTLY like the real test",
      "Answers with Audio included",
    ],
    chapters: [
      { name: "Test 1", lessons: 4 },
      { name: "Test 2", lessons: 4 },
      { name: "Test 3", lessons: 4 },
      { name: "Test 4", lessons: 4 },
    ],
  },
];
