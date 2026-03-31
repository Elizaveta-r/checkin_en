"use client";

import React from "react";

export default function Button({
  className,
  onClick,
  title,
  icon,
  iconPosition,
  href,
  target,
  rel,
  ...props
}) {
  return href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`cursor-pointer duration-300 ease-in flex items-center justify-center gap-4 ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {title}
      {icon && iconPosition === "right" && icon}
    </a>
  ) : (
    <button
      className={`cursor-pointer duration-300 ease-in flex items-center justify-center gap-4 ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {title}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
