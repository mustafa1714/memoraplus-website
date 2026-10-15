import type { Locale } from "@/content/site";
import { DICT, CONTACT } from "@/content/site";
import type { Project } from "@/content/projects";
import { formatPrice, whatsappUrl } from "@/lib/utils";
import { Icon } from "./Icon";

export function ProjectCard({ project: p, lang, headingLevel = 3 }: { project: Project; lang: Locale; headingLevel?: 2 | 3 }) {
  const t = DICT[lang].projects;
  const name = p.name[lang];
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="mp-card" data-side={p.side} data-type={p.type} data-status={p.status}>
      <div className="mp-card__media">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            srcSet={p.image.endsWith("-800.webp") ? `${p.image.replace(/-800\.webp$/, "-480.webp")} 480w, ${p.image} 800w` : undefined}
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            alt={p.imageAlt?.[lang] ?? name}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        ) : (
          <div className="mp-card__placeholder" role="img" aria-label={`${t.card.image} — ${name}`}>
            <Icon name="building" />
            <span>{t.card.image}</span>
          </div>
        )}
        <div className="mp-card__badges">
          <span className="mp-badge mp-badge--status">{t.statusLabel[p.status]}</span>
          {p.draft && <span className="mp-demo-badge">{t.card.draft}</span>}
        </div>
      </div>
      <div className="mp-card__body">
        <p className="mp-card__type">{t.typeLabel[p.type]}</p>
        <H className="mp-card__title">{name}</H>
        <p className="mp-card__loc"><Icon name="pin" />{p.district[lang]} — {t.sideLabel[p.side]}</p>
        <p className="mp-card__price">
          <span className="mp-card__price-label">{t.card.from}</span>
          <span className="mp-card__price-value mp-ltr">{formatPrice(p.priceFrom, lang)}</span>
        </p>
        <dl className="mp-card__facts">
          <div className="mp-card__fact"><dt>{t.card.down}</dt><dd><bdi>{p.downPaymentPct}%</bdi></dd></div>
          <div className="mp-card__fact"><dt>{t.card.installments}</dt><dd>{t.card.months(p.installmentMonths)}</dd></div>
          <div className="mp-card__fact"><dt>{t.card.delivery}</dt><dd>{p.delivery ?? t.card.immediate}</dd></div>
        </dl>
        <p className="mp-card__units"><span>{t.card.rooms}:</span> {p.units[lang].split(/(\d+\+\d+)/).map((part, i) => (/^\d+\+\d+$/.test(part) ? <bdi key={i} dir="ltr">{part}</bdi> : part))}</p>
        <div className="mp-card__actions">
          <a className="mp-btn mp-btn--whatsapp mp-btn--sm" href={whatsappUrl(DICT[lang].whatsappProjectMessage(name))} target="_blank" rel="noopener">
            <Icon name="whatsapp-chat" />{DICT[lang].cta.enquire}
          </a>
          <a className="mp-btn mp-btn--outline mp-btn--sm" href={`tel:${CONTACT.phoneE164}`} aria-label={DICT[lang].cta.callAbout(name)}>
            <Icon name="phone" />
          </a>
        </div>
      </div>
    </article>
  );
}
