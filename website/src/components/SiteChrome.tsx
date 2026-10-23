import type { Locale } from "@/content/site";
import { DICT } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { CookieBanner } from "./CookieBanner";
import { Reveal } from "./Reveal";
import type { PageKey } from "./LanguageSwitch";

const DEFAULT_PATH: Record<PageKey, string> = { home: "", projects: "projects/", notFound: "" };

/**
 * Page frame: skip link, header, footer, WhatsApp float, cookie banner.
 * `path` (after /<lang>/) keeps the language switch on the same page; `whatsappMessage` lets a project page prefill its name.
 */
export function SiteChrome({ lang, page, path, whatsappMessage, children }: { lang: Locale; page: PageKey; path?: string; whatsappMessage?: string; children: React.ReactNode }) {
  const t = DICT[lang];
  const p = path ?? DEFAULT_PATH[page];
  return (
    <>
      <a className="mp-skip" href="#main">{t.nav.skip}</a>
      <Header lang={lang} page={page} path={p} />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer lang={lang} path={p} />
      <WhatsAppFloat url={whatsappUrl(whatsappMessage ?? t.whatsappMessage)} label={t.cta.whatsapp} />
      <CookieBanner t={t.cookie} />
      <Reveal />
    </>
  );
}
