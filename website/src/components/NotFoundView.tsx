import { DICT, CONTACT, type Locale } from "@/content/site";
import { FEATURED_PROJECTS, projectBySlug, toCard } from "@/content/projects";
import { SiteChrome } from "./SiteChrome";
import { ProjectCard } from "./ProjectCard";
import { Icon } from "./Icon";
import { href, whatsappUrl } from "@/lib/utils";

/** Path of the per-language 404 page (after /<lang>/). The server's ErrorDocument and the root 404 fallback point here. */
export const NOT_FOUND_PATH = "page-not-found/";

/**
 * 404 page body in one language: photo banner with the main ways back, quick links overlapping its edge,
 * featured projects to keep the visit going, and a WhatsApp/phone band.
 */
export function NotFoundView({ lang }: { lang: Locale }) {
  const d = DICT[lang];
  const t = d.notFound;
  const wa = whatsappUrl(d.whatsappMessage);
  const invest = projectBySlug("kanal-istanbul-yenisehir");

  const links = [
    { key: "home", icon: "building", url: href.home(lang), ...t.links.home },
    { key: "projects", icon: "key", url: href.projects(lang), ...t.links.projects },
    ...(invest ? [{ key: "invest", icon: "chart", url: href.project(lang, invest.slug), title: invest.name[lang], text: d.projects.typeLabel.investment }] : []),
    { key: "contact", icon: "phone", url: href.section(lang, "contact"), ...t.links.contact },
  ];

  return (
    <SiteChrome lang={lang} page="notFound" path={NOT_FOUND_PATH}>
      {/* BANNER */}
      <section className="mp-photo-hero mp-photo-hero--banner mp-dark mp-nf-hero" aria-labelledby="nf-title">
        <div className="mp-photo-hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/hero-1280.webp" srcSet="/media/hero-m.webp 800w, /media/hero-1280.webp 1280w, /media/hero-1920.webp 1920w" sizes="100vw" alt="" width={1920} height={1080} fetchPriority="high" decoding="async" />
        </div>
        <div className="mp-photo-hero__scrim" />
        <div className="mp-container mp-photo-hero__inner">
          <div className="mp-photo-hero__panel mp-nf-hero__panel">
            <p className="mp-nf-hero__code" aria-hidden="true">404</p>
            <p className="mp-heading__eyebrow">{t.eyebrow}</p>
            <h1 className="mp-photo-hero__title" id="nf-title">{t.title}</h1>
            <hr className="mp-heading__rule" />
            <p className="mp-photo-hero__lead">{t.lead}</p>
            <div className="mp-hero__actions">
              <a className="mp-btn" href={href.projects(lang)}>{t.projects}<Icon name="arrow" dir /></a>
              <a className="mp-btn mp-btn--outline" href={href.home(lang)}>{t.home}</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS — raised card over the banner's bottom edge */}
      <section className="mp-nf-links" aria-labelledby="nf-links-title">
        <div className="mp-container">
          <div className="mp-nf-links__card">
            <h2 className="mp-nf-links__title" id="nf-links-title">{t.suggest}</h2>
            <ul className="mp-nf-links__list">
              {links.map((l) => (
                <li key={l.key}>
                  <a className="mp-nf-link" href={l.url}>
                    <span className="mp-nf-link__icon"><Icon name={l.icon} /></span>
                    <span className="mp-nf-link__body">
                      <span className="mp-nf-link__title">{l.title}</span>
                      <span className="mp-nf-link__text">{l.text}</span>
                    </span>
                    <Icon name="arrow" className="mp-nf-link__arrow" dir />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mp-section mp-section--soft" aria-labelledby="nf-featured-title">
        <div className="mp-container">
          <div className="mp-section__head">
            <div>
              <h2 className="mp-heading__title" id="nf-featured-title">{t.featured}</h2>
              <hr className="mp-heading__rule mp-project-rule" />
            </div>
            <a className="mp-btn mp-btn--link" href={href.projects(lang)}>{d.cta.allProjects}<Icon name="arrow" dir /></a>
          </div>
          <div className="mp-grid">
            <ul className="mp-grid__list">
              {FEATURED_PROJECTS.map((p) => (<li key={p.slug}><ProjectCard project={toCard(p)} lang={lang} /></li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="mp-section mp-section--dark mp-dark" aria-labelledby="nf-help-title">
        <div className="mp-container mp-project-contact">
          <div>
            <h2 className="mp-heading__title" id="nf-help-title">{t.helpTitle}</h2>
            <hr className="mp-heading__rule" />
            <p className="mp-heading__lead">{t.helpLead}</p>
          </div>
          <div className="mp-hero__actions">
            <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{d.cta.whatsapp}</a>
            <a className="mp-btn mp-btn--outline" href={`tel:${CONTACT.phoneE164}`}><Icon name="phone" /><span className="mp-ltr">{CONTACT.phoneDisplay}</span></a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
