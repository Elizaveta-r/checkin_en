import ScrollTerm from "@/components/ScrollTerm";
import ScrollToTopButton from "@/ui/ScrollToTopButton";
import { privacy } from "@/utils/render-data/render-privacy";
import React from "react";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6 flex flex-col gap-12 text-gray-900 leading-relaxed">
      <ScrollToTopButton />
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center md:text-left">
          PRIVACY POLICY of the “CheckIn” Service
        </h1>
        <p className="text-sm text-gray-600 text-center md:text-left">
          Last updated: 18 November 2025
        </p>
        <p className="text-base">
          This Privacy Policy (the “Policy”) describes how the “CheckIn” service
          (the “Service”) processes the personal data of Users and their
          Employees. The Service is operated by Sole Proprietor Andrey
          Sergeevich Melkov, Tax ID (INN) 910200003507, Primary State
          Registration Number (OGRNIP) 314910211500181, registered address: 28
          Pobedy Avenue, Apt. 57, Simferopol, Republic of Crimea, 295034, Russia
          (the “Operator”).
        </p>
      </div>

      {/* Table of contents */}
      <section className="flex flex-col gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-center md:text-left">
          Table of Contents
        </h2>
        <ScrollTerm items={privacy} />
      </section>

      {/* Terms */}
      <section>
        <ol className="list-decimal flex flex-col gap-10 pl-5 text-xl font-bold">
          {privacy.map((priv, i) => (
            <li key={i} id={priv.tag}>
              {priv.title}

              {priv.items.length > 1 ? (
                <ol className="list-decimal ml-2 mt-4 pl-4 border-l-2 border-green-700 text-base font-normal flex flex-col gap-3">
                  {priv.items.map((item, j) => (
                    <li key={j} className="whitespace-pre-line ml-7.5">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="text-base ml-2 mt-3 pl-4 border-l-2 border-green-700 font-normal whitespace-pre-line">
                  {priv.items[0]}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
