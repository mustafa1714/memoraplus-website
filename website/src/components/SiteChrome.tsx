import type { Locale } from "@/content/site";
import { DICT } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { CookieBanner } from "./CookieBanner";
import { Reveal } from "./Reveal";
import type { PageKey } from "./LanguageSwitch";

export function SiteChrome({ lang, page, children }: { lang: Locale; page: PageKey; children: React.ReactNode }) {
  const t = DICT[lang];
  return (
    <>
      <a className="mp-skip" href="#main">{t.nav.skip}</a>
      <Header lang={lang} page={page} />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer lang={lang} page={page} />
      <WhatsAppFloat url={whatsappUrl(t.whatsappMessage)} label={t.cta.whatsapp} />
      <CookieBanner t={t.cookie} />
      <Reveal />
    </>
  );
}
