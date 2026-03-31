import ScrollTerm from "@/components/ScrollTerm";
import ScrollToTopButton from "@/ui/ScrollToTopButton";
import { terms } from "@/utils/render-data/render-terms-of-use-data";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://checkin.your-domain.ru"),
  title: {
    default: "Terms of Use | CheckIn",
    template: "%s | CheckIn",
  },
  description:
    "The legal terms governing access to and use of the CheckIn service, including user rights, responsibilities, and service rules.",
  alternates: {
    canonical: "/terms-of-use",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use | CheckIn",
    description:
      "Read the Terms of Use for CheckIn, including user rights, responsibilities, and the rules governing the use of the service.",
    url: "/terms-of-use",
    siteName: "CheckIn",
    type: "article",
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6 flex flex-col gap-12 text-gray-900 leading-relaxed">
      <ScrollToTopButton />
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center md:text-left">
          CheckIn Terms of Use
        </h1>
        <p className="text-sm text-gray-600 text-center md:text-left">
          Last updated: 17 November 2025
        </p>
        <p className="text-base">
          These Terms of Use (the “Terms”) govern your access to and use of the
          CheckIn service (the “Service”). By accessing or using the Service,
          you agree to be bound by these Terms.
        </p>
      </div>

      {/* Table of contents */}
      <section className="flex flex-col gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-center md:text-left">
          Table of Contents
        </h2>
        <ScrollTerm items={terms} />
      </section>

      {/* Terms */}
      <section>
        <ol className="list-decimal flex flex-col gap-10 pl-5 text-xl font-bold">
          {terms.map((term, i) => (
            <li key={i} id={term.tag}>
              {term.title}

              {term.items.length > 1 ? (
                <ol className="list-decimal ml-2 mt-4 pl-4 border-l-2 border-green-700 text-base font-normal flex flex-col gap-3">
                  {term.items.map((item, j) => (
                    <li key={j} className="whitespace-pre-line ml-7.5">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="text-base ml-2 mt-3 pl-4 border-l-2 border-green-700 font-normal whitespace-pre-line">
                  {term.items[0]}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
