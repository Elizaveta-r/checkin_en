"use client";
import { terms } from "@/utils/render-data/render-terms-of-use-data";
import React from "react";

export default function ScrollTerm({ items = terms }) {
  const handleScroll = (e, tag) => {
    e.preventDefault();
    const element = document.getElementById(tag);

    if (!element) return;

    const headerOffset = 100; // высота твоего хедера
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <ol className="list-decimal flex flex-col gap-3 pl-5 text-base">
      {items.map((item, i) => (
        <li key={i}>
          <a
            href={item.tag}
            onClick={(e) => handleScroll(e, item.tag)}
            className="text-green-700 hover:underline"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
