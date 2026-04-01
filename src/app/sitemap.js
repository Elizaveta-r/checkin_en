export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    {
      url: "https://checkin-en.vercel.app/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://checkin-en.vercel.app/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://checkin-en.vercel.app/terms-of-use",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
