"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/img/Logo.svg";
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";
import Image from "next/image";
import localFont from "next/font/local";

const renderItemsData = [
  {
    href: "#convenient",
    title: "Benefits",
  },
  {
    href: "#features",
    title: "Features",
  },
  {
    href: "#how-it-works",
    title: "How It Works",
  },
];

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

const RenderMenuItem = ({ href, title, onClick }) => {
  const handleClick = useAnchorNavigation();

  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          handleClick(e, href);
          if (onClick) onClick();
        }}
        className="leading-none font-semibold text-[#666666] duration-300 ease-in hover:text-[#1F2937] cursor-pointer"
      >
        {title}
      </a>
    </li>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white mx-auto w-full xl:px-25 lg:px-6 md:px-3 sm:px-3 px-3 shadow-sm">
      <div className="py-4 md:px-0 sm:px-3 px-0 flex items-center justify-between md:gap-4 gap-2">
        <div className="flex items-center gap-8 lg:gap-8 md:gap-6 sm:gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="flex items-center justify-center md:w-10 md:h-10 sm:w-7 sm:h-7 w-6 h-6]">
                <Image src={Logo} alt="24 CheckIn Logo" />
              </div>

              <span className={`text-xl md:text-xl sm:text-lg font-semibold`}>
                24 Check
                <span
                  className={`${lora.className} antialiased text-xl md:text-xl sm:text-lg font-semibold`}
                >
                  I
                </span>
                n
              </span>
            </Link>
          </div>
          <nav aria-label="Main navigation" className="md:block hidden">
            <ul className="flex gap-1 md:gap-3 lg:gap-7 m-0 p-0 pt-1 list-none">
              {renderItemsData.map((item) => (
                <RenderMenuItem key={item.href} {...item} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="md:flex hidden md:gap-3 sm:gap-4 gap-3">
          <a
            className="font-bold text-[#1F2937] self-center cursor-pointer duration-300 ease-in hover:text-[#24C367] md:text-base sm:text-sm text-xs"
            href="https://workspace.24checkin.ru/auth"
            rel="nofollow"
          >
            Log In
          </a>
          <a
            href="https://workspace.24checkin.ru/reg"
            rel="nofollow"
            className="md:px-5 md:py-3 sm:px-4 sm:py-2 px-3 py-2 rounded-md bg-[#1F2937] text-white font-bold cursor-pointer duration-300 ease-in hover:bg-[#24C367] md:text-base sm:text-sm text-xs whitespace-nowrap"
          >
            Sign Up
          </a>
        </div>

        {/* Burger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X size={24} color="#1F2937" />
          ) : (
            <Menu size={24} color="#1F2937" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-1 md:hidden fixed top-18 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="px-6 py-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            {renderItemsData.map((item) => (
              <RenderMenuItem key={item.href} {...item} onClick={closeMenu} />
            ))}
          </ul>

          <div className="h-px bg-gray-200"></div>

          <div className="flex flex-col gap-3">
            <a
              className="font-bold text-[#1F2937] text-center py-3 cursor-pointer duration-300 ease-in hover:text-[#24C367]"
              href="https://workspace.24checkin.ru/auth"
              rel="nofollow"
              onClick={closeMenu}
            >
              Log In
            </a>
            <a
              href="https://workspace.24checkin.ru/reg"
              rel="nofollow"
              className="px-5 py-3 rounded-md bg-[#1F2937] text-white font-bold text-center cursor-pointer duration-300 ease-in hover:bg-[#24C367]"
              onClick={closeMenu}
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed z-0 inset-0 bg-black/20 backdrop-blur-sm top-18"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
