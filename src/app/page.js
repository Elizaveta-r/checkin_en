import ComfortablySection from "@/sections/ComfortablySection";
import DashboardInterface from "@/sections/DashboardInterface";
import MainSection from "@/sections/MainSection";
import SectionScreenshots from "@/sections/SectionScreenshots";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import CTA from "@/sections/CTA";
import CTAFirst from "@/sections/CTAFirst";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://24checkin.ru/"),
  title: "CheckIn24 — Employee Monitoring, Time Tracking & Automated Reporting",
  description:
    "CheckIn24 helps businesses monitor employees, track check-in and check-out times, automate routine reporting, and improve discipline with AI-powered task control and reminders.",
  alternates: { canonical: "https://24checkin.ru/" },
  openGraph: {
    title: "CheckIn24 — Employee Monitoring, Time Tracking & AI Reporting",
    description:
      "Monitor employees, track attendance, automate reports, and control routine tasks with AI-powered reminders and verification in CheckIn24.",
    url: "https://24checkin.ru/",
    siteName: "CheckIn24",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CheckIn24 — Employee monitoring, time tracking, and AI-powered reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckIn24 — Employee Monitoring & AI Task Control",
    description:
      "Track attendance, monitor employees, automate reporting, and manage routine tasks with AI-powered reminders and verification.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-16 relative z-1 w-full flex-col md:gap-24 gap-10">
      <MainSection />
      <SectionScreenshots />
      <ComfortablySection />
      <CTAFirst />
      <DashboardInterface />
      <Features />
      <HowItWorks />
      <CTA />

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CheckIn24",
              url: "https://24checkin.ru/",
              logo: "https://24checkin.ru/logo.png",
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CheckIn24",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://24checkin.ru/",
              description:
                "AI business assistant: employee monitoring, time tracking, automated reports, and reminders.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
          ]),
        }}
      />
    </main>
  );
}
