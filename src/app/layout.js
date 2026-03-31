/* eslint-disable @next/next/no-img-element */
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const nunito = localFont({
  src: [
    { path: "./fonts/Nunito-ExtraLight.woff2", weight: "200", style: "normal" },
    {
      path: "./fonts/Nunito-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Nunito-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./fonts/Nunito-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./fonts/Nunito-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Nunito-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Nunito-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Nunito-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/Nunito-ExtraBold.woff2", weight: "800", style: "normal" },
    {
      path: "./fonts/Nunito-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/Nunito-Black.woff2", weight: "900", style: "normal" },
    {
      path: "./fonts/Nunito-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
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

const METRIKA_ID = 105976059;

export default function RootLayout({ children }) {
  return (
    // Изменено с "ru" на "en" для корректной индексации и работы экранных дикторов
    <html lang="en">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

              ym(${METRIKA_ID}, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
          }}
        />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <Header />

        <div className="sm:mt-20 mt-18 xl:px-0 sm:px-4 md:px-5 lg:px-6 px-3 xl:max-w-275 mx-auto">
          {children}
        </div>
        <Footer />

        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
