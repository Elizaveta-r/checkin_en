export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?*"],
      },
    ],
    sitemap: "https://24checkin.ru/sitemap.xml",
  };
}
