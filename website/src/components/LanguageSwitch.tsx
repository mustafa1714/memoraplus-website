import { LOCALES, LOCALE_META, type Locale } from "@/content/site";
import { Icon } from "./Icon";

export type PageKey = "home" | "projects" | "notFound";

/** Links to the same page in every language. `path` is the part after `/<lang>/` ("", "projects/", "projects/<slug>/"). */
export function LanguageSwitch({ lang, path, label }: { lang: Locale; path: string; label: string }) {
  return (
    <nav className="mp-lang" aria-label={label}>
      <Icon name="globe" className="mp-lang__icon" />
      <ul className="mp-lang__list">
        {LOCALES.map((l) => (
          <li key={l}>
            <a
              className="mp-lang__link"
              href={`/${l}/${path}`}
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
