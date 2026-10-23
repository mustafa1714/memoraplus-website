import type { Locale } from "@/content/site";
import { DICT } from "@/content/site";
import { srcSet, type CardProject } from "@/content/projects/media-utils";
import { formatMoney, href, whatsappUrl } from "@/lib/utils";
import { Icon } from "./Icon";

/** Renders "2+1 – 4+1"-style values LTR inside RTL text. */
export function Ltr({ text }: { text: string }) {
  return <>{text.split(/(\d+(?:[.,]\d+)?\+\d+)/).map((part, i) => (/^\d+(?:[.,]\d+)?\+\d+$/.test(part) ? <bdi key={i} dir="ltr">{part}</bdi> : part))}</>;
}

export function ProjectCard({ project: p, lang, headingLevel = 3 }: { project: CardProject; lang: Locale; headingLevel?: 2 | 3 }) {
  const t = DICT[lang].projects;
  const name = p.name[lang];
  const H = headingLevel === 2 ? "h2" : "h3";
  const url = href.project(lang, p.slug);
  const cover = p.cover;
  return (
    <article className="mp-card" data-side={p.side} data-type={p.type} data-status={p.status ?? ""}>
      <a className="mp-card__media" href={url} tabIndex={-1} aria-hidden="true">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${cover.src}-${cover.widths[0]}.webp`} srcSet={srcSet(cover)} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" alt="" loading="lazy" decoding="async" width={cover.w} height={cover.h} />
        ) : (
          <span className="mp-card__placeholder">
            <Icon name={p.type === "investment" ? "chart" : "building"} />
            <span>{name}</span>
          </span>
        )}
        {p.status && (
          <span className="mp-card__badges">
            <span className="mp-badge mp-badge--status">{t.statusLabel[p.status]}</span>
          </span>
        )}
      </a>
      <div className="mp-card__body">
        <p className="mp-card__type">{t.typeLabel[p.type]}</p>
        <H className="mp-card__title"><a className="mp-card__link" href={url}>{name}</a></H>
        <p className="mp-card__loc"><Icon name="pin" />{p.district[lang]} — {t.sideLabel[p.side]}</p>
        {p.priceFrom && (
          <p className="mp-card__price">
            <span className="mp-card__price-label">{t.card.from}</span>
            <span className="mp-card__price-value mp-ltr">{formatMoney(p.priceFrom, lang)}</span>
          </p>
        )}
        <dl className="mp-card__facts">
          {p.cardFacts.map((f) => (
            <div className="mp-card__fact" key={f.label.en}><dt>{f.label[lang]}</dt><dd><Ltr text={f.value[lang]} /></dd></div>
          ))}
        </dl>
        <div className="mp-card__actions">
          <a className="mp-btn mp-btn--whatsapp mp-btn--sm" href={whatsappUrl(DICT[lang].whatsappProjectMessage(name))} target="_blank" rel="noopener">
            <Icon name="whatsapp-chat" />{DICT[lang].cta.enquire}
          </a>
          <a className="mp-btn mp-btn--outline mp-btn--sm" href={url} aria-label={t.card.view(name)}>
            <Icon name="arrow" dir />
          </a>
        </div>
      </div>
    </article>
  );
}
