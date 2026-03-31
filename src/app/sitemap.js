export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    {
      url: "https://24checkin.ru/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://24checkin.ru/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://24checkin.ru/terms-of-use",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
