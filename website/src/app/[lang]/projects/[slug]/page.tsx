import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DICT, CONTACT, type Locale } from "@/content/site";
import { PROJECTS, projectBySlug, projectCover, projectMedia, relatedProjects, srcSet, toCard, variant, type L } from "@/content/projects";
import { SiteChrome } from "@/components/SiteChrome";
import { ProjectCard, Ltr } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Icon } from "@/components/Icon";
import { href, whatsappUrl, SITE_URL } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ lang: Locale; slug: string }>;

/** Every project is pre-rendered for every language; any other slug is a real 404 (static export, no runtime server). */
export const dynamicParams = false;
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  const cover = projectCover(p);
  return pageMetadata(lang, `projects/${p.slug}/`, DICT[lang].projects.detail.metaTitle(p.name[lang]), p.tagline[lang], cover ? { url: variant(cover, 1280), width: 1280, height: Math.round((cover.h * 1280) / cover.w) } : undefined);
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const d = DICT[lang];
  const t = d.projects.detail;
  const tp = d.projects;
  const name = p.name[lang];
  const tx = (v: L) => v[lang];
  const media = projectMedia(p.slug);
  const cover = projectCover(p);
  const wa = whatsappUrl(d.whatsappProjectMessage(name));
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery ?? `${p.name.en} ${p.district.en} Istanbul`)}`;
  /** General project / investment opportunity: no units, prices or gallery placeholder. */
  const general = p.type === "investment";
  const related = relatedProjects(p).map(toCard);
  const unitCols = p.units ? (["area", "price", "count"] as const).filter((c) => p.units!.rows.some((r) => r[c])) : [];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: d.nav.home, ...(SITE_URL ? { item: `${SITE_URL}${href.home(lang)}` } : {}) },
      { "@type": "ListItem", position: 2, name: d.nav.projects, ...(SITE_URL ? { item: `${SITE_URL}${href.projects(lang)}` } : {}) },
      { "@type": "ListItem", position: 3, name, ...(SITE_URL ? { item: `${SITE_URL}${href.project(lang, p.slug)}` } : {}) },
    ],
  };

  return (
    <SiteChrome lang={lang} page="projects" path={`projects/${p.slug}/`} whatsappMessage={d.whatsappProjectMessage(name)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO — the project's own cover image */}
      <section className={`mp-photo-hero mp-photo-hero--banner mp-dark mp-project-hero${cover ? "" : " mp-project-hero--plain"}`} aria-labelledby="project-title">
        <div className={`mp-photo-hero__media${cover ? "" : " mp-video__poster--placeholder"}`}>
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={variant(cover, 1920)} srcSet={srcSet(cover)} sizes="100vw" alt="" width={cover.w} height={cover.h} fetchPriority="high" decoding="async" />
          )}
        </div>
        <div className="mp-photo-hero__scrim" />
        <div className="mp-container mp-photo-hero__inner">
          <div className="mp-photo-hero__panel mp-project-hero__panel">
            <nav aria-label={d.nav.projects}>
              <a className="mp-project-hero__back" href={href.projects(lang)}><Icon name="arrow" className="mp-project-hero__back-icon" dir />{t.back}</a>
            </nav>
            <p className="mp-heading__eyebrow">{tp.typeLabel[p.type]} · {tx(p.district)} — {tp.sideLabel[p.side]}</p>
            <h1 className="mp-photo-hero__title mp-project-hero__title" id="project-title">{name}</h1>
            <hr className="mp-heading__rule" />
            <p className="mp-photo-hero__lead">{tx(p.tagline)}</p>
            {(p.status || p.chips?.length) && (
              <ul className="mp-project-hero__chips">
                {p.status && <li className="mp-badge mp-badge--status">{tp.statusLabel[p.status]}</li>}
                {p.chips?.map((c) => <li key={c.en} className="mp-project-hero__chip">{tx(c)}</li>)}
              </ul>
            )}
            <div className="mp-hero__actions">
              <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{d.cta.enquire}</a>
              <a className="mp-btn mp-btn--outline" href={`tel:${CONTACT.phoneE164}`} aria-label={d.cta.callAbout(name)}><Icon name="phone" />{d.cta.call}</a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + KEY FACTS */}
      <section className="mp-section mp-section--white" aria-labelledby="overview-title">
        <div className="mp-container mp-project-overview">
          <div className="mp-project-overview__text">
            <h2 className="mp-heading__title" id="overview-title">{t.overview}</h2>
            <hr className="mp-heading__rule" />
            {p.intro.map((para) => <p key={para.en} className="mp-project-prose"><Ltr text={tx(para)} /></p>)}
            {p.highlights && (
              <div className="mp-project-block">
                {p.highlights.title && <h3 className="mp-project-block__title">{tx(p.highlights.title)}</h3>}
                <ul className="mp-check-list">{p.highlights.items.map((i) => <li key={i.en}><Icon name="check" /><span><Ltr text={tx(i)} /></span></li>)}</ul>
              </div>
            )}
          </div>
          <aside className="mp-facts" aria-labelledby="facts-title">
            <h2 className="mp-facts__title" id="facts-title">{general ? t.figures : t.facts}</h2>
            <dl className="mp-facts__list">
              {p.facts.map((f) => (
                <div className="mp-facts__row" key={f.label.en}><dt>{tx(f.label)}</dt><dd><Ltr text={tx(f.value)} /></dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* GALLERY (omitted for a general project without images) */}
      {!(general && !media.gallery.length) && (
      <section className="mp-section mp-section--soft" aria-labelledby="gallery-title">
        <div className="mp-container">
          <h2 className="mp-heading__title" id="gallery-title">{t.gallery}</h2>
          <hr className="mp-heading__rule mp-project-rule" />
          {media.gallery.length ? (
            <ProjectGallery images={media.gallery} name={name} lang={lang} />
          ) : (
            <p className="mp-project-empty"><Icon name="building" />{t.noPhotos}</p>
          )}
        </div>
      </section>
      )}

      {/* UNITS / PRICES */}
      {p.units && (
        <section className="mp-section mp-section--cream" aria-labelledby="units-title">
          <div className="mp-container">
            <h2 className="mp-heading__title" id="units-title">{t.units}</h2>
            <hr className="mp-heading__rule mp-project-rule" />
            <div className="mp-units-wrap" tabIndex={0} role="region" aria-labelledby="units-title">
              <table className="mp-units">
                <thead>
                  <tr>
                    <th scope="col">{t.unitType}</th>
                    {unitCols.map((c) => <th scope="col" key={c}>{c === "area" ? t.area : c === "price" ? t.price : t.count}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {p.units.rows.map((r) => (
                    <tr key={r.type.en}>
                      <th scope="row"><Ltr text={tx(r.type)} /></th>
                      {unitCols.map((c) => <td key={c}>{r[c] ? <Ltr text={tx(r[c]!)} /> : "—"}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {p.units.note && <p className="mp-units__note">{tx(p.units.note)}</p>}
          </div>
        </section>
      )}

      {/* PROJECT-SPECIFIC SECTIONS (offers, specifications, Fişekhane…) */}
      {p.sections?.map((s, si) => (
        <section key={s.title.en} className={`mp-section ${si % 2 ? "mp-section--soft" : "mp-section--white"}`} aria-labelledby={`sec-${si}`}>
          <div className="mp-container mp-project-section">
            <h2 className="mp-heading__title" id={`sec-${si}`}>{tx(s.title)}</h2>
            <hr className="mp-heading__rule mp-project-rule" />
            {s.paragraphs?.map((para) => <p key={para.en} className="mp-project-prose"><Ltr text={tx(para)} /></p>)}
            {s.rows && (
              <dl className="mp-facts__list mp-facts__list--wide">
                {s.rows.map((r) => <div className="mp-facts__row" key={r.label.en}><dt>{tx(r.label)}</dt><dd><Ltr text={tx(r.value)} /></dd></div>)}
              </dl>
            )}
            {s.items && <ul className="mp-check-list">{s.items.map((i) => <li key={i.en}><Icon name="check" /><span><Ltr text={tx(i)} /></span></li>)}</ul>}
          </div>
        </section>
      ))}

      {/* PAYMENT + AMENITIES */}
      {(p.payment || p.amenities) && (
        <section className="mp-section mp-section--white" aria-labelledby={p.amenities ? "amenities-title" : "payment-title"}>
          <div className="mp-container mp-project-grid">
            {p.amenities && (
              <div>
                <h2 className="mp-heading__title" id="amenities-title">{t.amenities}</h2>
                <hr className="mp-heading__rule mp-project-rule" />
                <div className="mp-amenities">
                  {p.amenities.map((g, gi) => (
                    <div key={gi} className="mp-amenities__group">
                      {g.title && <h3 className="mp-project-block__title">{tx(g.title)}</h3>}
                      <ul className="mp-check-list">{g.items.map((i) => <li key={i.en}><Icon name="check" /><span><Ltr text={tx(i)} /></span></li>)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {p.payment && (
              <aside className="mp-facts mp-facts--payment" aria-labelledby="payment-title">
                <h2 className="mp-facts__title" id="payment-title">{t.payment}</h2>
                <ul className="mp-check-list">{p.payment.items.map((i) => <li key={i.en}><Icon name="check" /><span><Ltr text={tx(i)} /></span></li>)}</ul>
              </aside>
            )}
          </div>
        </section>
      )}

      {/* LOCATION */}
      <section className="mp-section mp-section--soft" aria-labelledby="location-title">
        <div className="mp-container mp-project-section">
          <h2 className="mp-heading__title" id="location-title">{t.location}</h2>
          <hr className="mp-heading__rule mp-project-rule" />
          {p.location?.title && <h3 className="mp-project-block__title">{tx(p.location.title)}</h3>}
          {p.location && <ul className="mp-check-list mp-check-list--pins">{p.location.items.map((i) => <li key={i.en}><Icon name="pin" /><span><Ltr text={tx(i)} /></span></li>)}</ul>}
          <a className="mp-btn mp-btn--outline mp-project-map" href={mapUrl} target="_blank" rel="noopener"><Icon name="pin" />{t.openMap}</a>
        </div>
      </section>

      {/* OWNERSHIP / CITIZENSHIP */}
      {p.ownership && (
        <section className="mp-section mp-section--white" aria-labelledby="ownership-title">
          <div className="mp-container mp-project-section">
            <h2 className="mp-heading__title" id="ownership-title">{t.ownership}</h2>
            <hr className="mp-heading__rule mp-project-rule" />
            {p.ownership.map((para) => <p key={para.en} className="mp-project-prose">{tx(para)}</p>)}
          </div>
        </section>
      )}

      {/* PLANS */}
      {media.plans.length > 0 && (
        <section className="mp-section mp-section--soft" aria-labelledby="plans-title">
          <div className="mp-container">
            <h2 className="mp-heading__title" id="plans-title">{t.plans}</h2>
            <hr className="mp-heading__rule mp-project-rule" />
            <ProjectGallery images={media.plans} name={`${name} — ${t.sitePlan}`} lang={lang} variantName="plans" />
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="mp-section mp-section--dark mp-dark" aria-labelledby="project-contact-title">
        <div className="mp-container mp-project-contact">
          <div>
            <h2 className="mp-heading__title" id="project-contact-title">{t.contactTitle}</h2>
            <hr className="mp-heading__rule" />
            <p className="mp-heading__lead">{t.contactLead}</p>
          </div>
          <div className="mp-hero__actions">
            <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{d.cta.enquire}</a>
            <a className="mp-btn mp-btn--outline" href={`tel:${CONTACT.phoneE164}`} aria-label={d.cta.callAbout(name)}><Icon name="phone" /><span className="mp-ltr">{CONTACT.phoneDisplay}</span></a>
          </div>
        </div>
      </section>

      {/* RELATED (same area) */}
      {related.length > 0 && (
        <section className="mp-section mp-section--soft" aria-labelledby="related-title">
          <div className="mp-container">
            <div className="mp-section__head">
              <div>
                <h2 className="mp-heading__title" id="related-title">{t.related}</h2>
                <hr className="mp-heading__rule mp-project-rule" />
              </div>
              <a className="mp-btn mp-btn--link" href={href.projects(lang)}>{d.cta.allProjects}<Icon name="arrow" dir /></a>
            </div>
            <div className="mp-grid">
              <ul className="mp-grid__list">
                {related.map((r) => <li key={r.slug}><ProjectCard project={r} lang={lang} /></li>)}
              </ul>
            </div>
          </div>
        </section>
      )}
    </SiteChrome>
  );
}

