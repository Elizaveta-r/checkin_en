"use client";
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/img/Logo.svg";
import localFont from "next/font/local";

const lora = localFont({
  src: [
    {
      path: "../app/fonts/Lora/Lora-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-lora",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
  ],
});

const footerLinks = {
  product: [
    { href: "#convenient", title: "Benefits" },
    { href: "#features", title: "Features" },
    { href: "#how-it-works", title: "How It Works" },
  ],
  company: [
    { href: "/about", title: "About Us" },
    { href: "/blog", title: "Blog" },
    { href: "/contacts", title: "Contact" },
  ],
  legal: [
    { href: "/privacy", title: "Privacy Policy" },
    { href: "/terms-of-use", title: "Terms of Service" },
  ],
};

export default function Footer() {
  const handleScroll = useAnchorNavigation();

  return (
    <footer className="relative bg-linear-to-br from-[#1F2937] to-[#111827] text-white mt-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-100 h-100 bg-linear-to-br from-[#24C367] to-[#0AB7CD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-75 h-75 bg-linear-to-tl from-[#C6FC81] to-[#ACE565] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 xl:px-25 md:px-7 sm:px-6 px-4 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-12 gap-6 mb-16">
          {/* Logo and description */}
          <div className="lg:col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline mb-4"
            >
              <div className="flex items-center justify-center md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6]">
                <Image src={Logo} className="w-full" alt="CheckIn24 Logo" />
              </div>
              <span className="text-xl md:text-xl sm:text-lg font-semibold">
                Check
                <span
                  className={`${lora.className} antialiased text-xl md:text-xl sm:text-lg font-semibold`}
                >
                  I
                </span>
                n
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              AI-powered business management assistant. Automate your routine
              and focus on what truly matters.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base cursor-pointer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`mailto:support@tab-is.ru`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                >
                  support@tab-is.ru
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} IE Melkov Andrey Sergeevich. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <p>Tax ID: 910200003507</p>
            <p>Reg. No: 314910211500181</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
