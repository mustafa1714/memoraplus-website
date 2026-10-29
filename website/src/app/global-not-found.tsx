import type { Metadata, Viewport } from "next";
import { DICT, LOCALE_META, type Locale } from "@/content/site";
import { NotFoundView, NOT_FOUND_PATH } from "@/components/NotFoundView";
import "@/styles/fonts.css";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/site.css";

// out/404.html: the host's fallback for URLs outside /ar/, /en/, /tr/. It is Arabic (the default locale);
// the script below switches to the visitor's language page when the URL or their last visited language says so.
const lang: Locale = "ar";
const t = DICT[lang];

/** Language from the URL prefix, else the last language the visitor used on the site (set in [lang]/layout.tsx). */
const PICK_LANGUAGE = `(function(){try{var m=location.pathname.match(/^\\/(ar|en|tr)(\\/|$)/),l=m?m[1]:localStorage.getItem("mp-lang");if(l==="en"||l==="tr")location.replace("/"+l+"/${NOT_FOUND_PATH}")}catch(e){}})();`;

export const metadata: Metadata = {
  title: `${t.notFound.title} | ${t.meta.title.split(" | ")[0]}`,
  robots: { index: false, follow: true },
  icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function GlobalNotFound() {
  const meta = LOCALE_META[lang];
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className="mp-no-js">
      <head>
        <script dangerouslySetInnerHTML={{ __html: PICK_LANGUAGE }} />
      </head>
      <body className="mp-root" lang={meta.htmlLang}>
        <NotFoundView lang={lang} />
      </body>
    </html>
  );
}
