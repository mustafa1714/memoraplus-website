import type { Metadata, Viewport } from "next";
import { DICT, LOCALE_META, type Locale } from "@/content/site";
import { SiteChrome } from "@/components/SiteChrome";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { href, whatsappUrl } from "@/lib/utils";
import "@/styles/fonts.css";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/site.css";

// Unknown URLs have no locale, so the 404 page is Arabic-first (the default locale) with links to the other languages.
const lang: Locale = "ar";
const t = DICT[lang];

export const metadata: Metadata = {
  title: `${t.notFound.title} | ${t.meta.title.split(" | ")[0]}`,
  robots: { index: false },
  icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function GlobalNotFound() {
  const meta = LOCALE_META[lang];
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className="mp-no-js">
      <body className="mp-root" lang={meta.htmlLang}>
        <SiteChrome lang={lang} page="notFound">
          <section className="mp-page-head" aria-labelledby="nf-title">
            <div className="mp-container">
              <SectionHeading as="h1" eyebrow="404" title={t.notFound.title} lead={t.notFound.lead} id="nf-title" />
              <div className="mp-hero__actions">
                <a className="mp-btn" href={href.home(lang)}>{t.notFound.home}<Icon name="arrow" dir /></a>
                <a className="mp-btn mp-btn--whatsapp" href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{t.cta.whatsapp}</a>
              </div>
              <div className="mp-hero__actions">
                {(["en", "tr"] as const).map((l) => (
                  <a key={l} className="mp-btn mp-btn--link" href={href.home(l)} lang={LOCALE_META[l].htmlLang} hrefLang={LOCALE_META[l].htmlLang} dir={LOCALE_META[l].dir}>
                    {DICT[l].notFound.title} — {DICT[l].notFound.homeIn}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </SiteChrome>
      </body>
    </html>
  );
}
