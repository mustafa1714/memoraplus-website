import type { Locale } from "@/content/site";
import { DICT, CONTACT } from "@/content/site";
import { href, whatsappUrl } from "@/lib/utils";
import { Icon } from "./Icon";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer({ lang, path }: { lang: Locale; path: string }) {
  const t = DICT[lang];
  return (
    <footer className="mp-footer mp-dark">
      <div className="mp-container">
        <div className="mp-footer__grid">
          <div className="mp-footer__about">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mp-footer__logo" src="/brand/memora-plus-logo-02-trimmed.webp" alt="Memora Plus — ميمورا بلس" width={96} height={72} loading="lazy" />
            <p className="mp-footer__tagline">{t.hero.title}</p>
            <ul className="mp-footer__social" aria-label={t.footer.social}>
              {CONTACT.social.map((s) => (<li key={s.name}><a href={s.url} target="_blank" rel="noopener">{s.name}</a></li>))}
            </ul>
          </div>
          <nav aria-labelledby="ft-links">
            <h2 className="mp-footer__title" id="ft-links">{t.footer.quickLinks}</h2>
            <ul className="mp-footer__list">
              <li><a className="mp-footer__link" href={href.home(lang)}>{t.nav.home}</a></li>
              <li><a className="mp-footer__link" href={href.section(lang, "about")}>{t.nav.about}</a></li>
              <li><a className="mp-footer__link" href={href.section(lang, "services")}>{t.nav.services}</a></li>
              <li><a className="mp-footer__link" href={href.projects(lang)}>{t.nav.projects}</a></li>
              <li><a className="mp-footer__link" href={href.section(lang, "contact")}>{t.nav.contact}</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="mp-footer__title">{t.footer.contact}</h2>
            <ul className="mp-footer__list">
              <li><a className="mp-footer__link" href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{t.cta.whatsappShort}</a></li>
              <li><a className="mp-footer__link" href={`tel:${CONTACT.phoneE164}`}><Icon name="phone" /><span className="mp-ltr">{CONTACT.phoneDisplay}</span></a></li>
              <li><a className="mp-footer__link" href={CONTACT.mapsUrl} target="_blank" rel="noopener"><Icon name="pin" />{CONTACT.city[lang]}</a></li>
            </ul>
          </div>
        </div>
        <div className="mp-footer__bottom">
          <span>© {new Date().getFullYear()} Memora Plus. {t.footer.rights}</span>
          <LanguageSwitch lang={lang} path={path} label={t.nav.language} />
        </div>
      </div>
    </footer>
  );
}
