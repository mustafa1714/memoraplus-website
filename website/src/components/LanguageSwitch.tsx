import { LOCALES, LOCALE_META, type Locale } from "@/content/site";
import { Icon } from "./Icon";

export type PageKey = "home" | "projects" | "notFound";

export function LanguageSwitch({ lang, page, label }: { lang: Locale; page: PageKey; label: string }) {
  return (
    <nav className="mp-lang" aria-label={label}>
      <Icon name="globe" className="mp-lang__icon" />
      <ul className="mp-lang__list">
        {LOCALES.map((l) => (
          <li key={l}>
            <a
              className="mp-lang__link"
              href={page === "projects" ? `/${l}/projects/` : `/${l}/`}
              lang={LOCALE_META[l].htmlLang}
              hrefLang={LOCALE_META[l].htmlLang}
              aria-current={l === lang ? "true" : undefined}
            >
              {l === "ar" ? LOCALE_META[l].label : LOCALE_META[l].short}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
