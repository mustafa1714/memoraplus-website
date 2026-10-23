import type { Metadata } from "next";
import { DICT, CONTACT, type Locale } from "@/content/site";
import { FEATURED_PROJECTS, toCard } from "@/content/projects";
import { SiteChrome } from "@/components/SiteChrome";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Icon } from "@/components/Icon";
import { href, whatsappUrl, SITE_URL } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(lang, "", DICT[lang].meta.title, DICT[lang].meta.description);
}

/** Icons for the four marketing-doc points: locations · options · guidance · citizenship/residence. */
const POINT_ICONS = ["pin", "building", "key", "globe"];

/** Temporary stock photography per service (public/media/CREDITS.md). */
const SERVICE_IMAGES: Record<string, string> = { investment: "/media/svc-investment.webp", residential: "/media/svc-residential.webp", commercial: "/media/svc-commercial.webp" };

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = DICT[lang];
  const wa = whatsappUrl(t.whatsappMessage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Memora Plus",
    alternateName: "ميمورا بلس",
    ...(SITE_URL ? { url: `${SITE_URL}/${lang}/` } : {}),
    telephone: CONTACT.phoneE164,
    foundingDate: "2026",
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    sameAs: CONTACT.social.map((s) => s.url),
  };

  return (
    <SiteChrome lang={lang} page="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO — full-bleed photograph, navy scrim, framed headline */}
      <section className="mp-photo-hero mp-photo-hero--full mp-dark" aria-labelledby="hero-title">
        {/* One srcset (not <picture>): React preloads this high-priority image from its own srcset, so a <source> would cause a double download. hero-m is a 4:5 crop for portrait-shaped small screens. */}
        <div className="mp-photo-hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/hero-1920.webp" srcSet="/media/hero-m.webp 800w, /media/hero-1280.webp 1280w, /media/hero-1920.webp 1920w" sizes="100vw" alt="" width={1920} height={1080} fetchPriority="high" decoding="async" />
        </div>
        <div className="mp-photo-hero__scrim" />
        <div className="mp-container mp-photo-hero__inner">
          <div className="mp-photo-hero__panel">
            <p className="mp-heading__eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mp-photo-hero__title" id="hero-title">{t.hero.title}</h1>
            <hr className="mp-heading__rule" />
            <p className="mp-photo-hero__lead">{t.hero.lead}</p>
            <div className="mp-hero__actions">
              <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{t.cta.whatsapp}</a>
              <a className="mp-btn mp-btn--outline" href={href.projects(lang)}>{t.cta.explore}<Icon name="arrow" dir /></a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP — wording from the company's marketing doc */}
      <section className="mp-points" aria-label={t.marketing.intro}>
        <div className="mp-container">
          <div className="mp-points__card">
            <p className="mp-points__intro">{t.marketing.intro}</p>
            <ul className="mp-points__list">
              {t.marketing.points.map((pt, i) => (
                <li key={pt} className="mp-points__item">
                  <span className="mp-points__icon"><Icon name={POINT_ICONS[i] ?? "check"} /></span>
                  <span className="mp-points__text">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT — image + approved bio */}
      <section className="mp-section mp-section--white" id="about" aria-labelledby="about-title">
        <div className="mp-container mp-about" data-mp-reveal>
          <figure className="mp-about__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/about.webp" alt="" width={900} height={1125} loading="lazy" decoding="async" />
          </figure>
          <div className="mp-about__body">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} id="about-title" />
            <p className="mp-about__text">{t.about.body}</p>
            <aside className="mp-promise">
              <p className="mp-promise__label">{t.about.promiseLabel}</p>
              <p className="mp-promise__text">{t.about.promise}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICES — photo tiles */}
      <section className="mp-section mp-section--cream" id="services" aria-labelledby="services-title">
        <div className="mp-container" data-mp-reveal>
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.main.body} id="services-title" />
          <ul className="mp-services">
            {t.services.items.map((s) => (
              <li key={s.key} className={`mp-tile${s.key === "investment" ? " mp-tile--featured" : ""}`}>
                <div className="mp-tile__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SERVICE_IMAGES[s.key]} alt="" width={720} height={900} loading="lazy" decoding="async" />
                </div>
                <div className="mp-tile__body">
                  {s.key === "investment" && <span className="mp-badge mp-badge--status mp-tile__badge">{t.services.highlightLabel}</span>}
                  <h3 className="mp-tile__title">{s.title}</h3>
                  <p className="mp-tile__text">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY — numbered differentiators */}
      <section className="mp-section mp-section--white" aria-labelledby="why-title">
        <div className="mp-container mp-why" data-mp-reveal>
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} id="why-title" />
          <ol className="mp-why__list">
            {t.why.points.map((p, i) => (
              <li key={p} className="mp-why__item">
                <span className="mp-why__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="mp-why__text">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mp-section mp-section--soft" aria-labelledby="featured-title">
        <div className="mp-container">
          <div className="mp-section__head" data-mp-reveal>
            <SectionHeading eyebrow={t.featured.eyebrow} title={t.featured.title} lead={t.featured.lead} id="featured-title" />
            <a className="mp-btn mp-btn--link" href={href.projects(lang)}>{t.cta.allProjects}<Icon name="arrow" dir /></a>
          </div>
          <div className="mp-grid">
            <ul className="mp-grid__list">
              {FEATURED_PROJECTS.map((p) => (<li key={p.slug}><ProjectCard project={toCard(p)} lang={lang} /></li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mp-section mp-section--white" aria-labelledby="video-title">
        <div className="mp-container mp-video-section" data-mp-reveal>
          <div className="mp-video-section__text">
            <SectionHeading eyebrow={t.video.eyebrow} title={t.video.title} lead={t.video.lead} id="video-title" />
            <a className="mp-btn mp-btn--link" href={CONTACT.youtubeChannel} target="_blank" rel="noopener">{t.video.channel}<Icon name="arrow" dir /></a>
          </div>
          <div className="mp-video-section__player">
            <VideoEmbed
              youtubeId={CONTACT.introVideoId}
              title={t.video.title}
              playLabel={t.video.play}
              channelUrl={CONTACT.youtubeChannel}
              channelLabel={t.video.channel}
              demo={{ src: "/media/bosphorus-960.mp4", poster: "/media/video-poster.webp", playLabel: t.demo.videoPlay }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mp-section mp-section--dark mp-dark" id="contact" aria-labelledby="contact-title">
        <div className="mp-container mp-contact" data-mp-reveal>
          <div>
            <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} id="contact-title" />
            <div className="mp-hero__actions">
              <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{t.cta.whatsapp}</a>
              <a className="mp-btn mp-btn--outline" href={`tel:${CONTACT.phoneE164}`}><Icon name="phone" />{t.cta.call}</a>
            </div>
          </div>
          <dl className="mp-contact__list">
            <div className="mp-contact__row"><dt><Icon name="whatsapp-chat" />{t.contact.whatsapp}</dt><dd><a href={wa} target="_blank" rel="noopener" className="mp-ltr">{CONTACT.phoneDisplay}</a></dd></div>
            <div className="mp-contact__row"><dt><Icon name="phone" />{t.contact.phone}</dt><dd><a href={`tel:${CONTACT.phoneE164}`} className="mp-ltr">{CONTACT.phoneDisplay}</a></dd></div>
            <div className="mp-contact__row"><dt><Icon name="pin" />{t.contact.location}</dt><dd>{CONTACT.city[lang]} · <a href={CONTACT.mapsUrl} target="_blank" rel="noopener">{t.contact.openMap}</a></dd></div>
            <div className="mp-contact__row"><dt><Icon name="globe" />{t.contact.follow}</dt><dd className="mp-contact__social">{CONTACT.social.map((s) => (<a key={s.name} href={s.url} target="_blank" rel="noopener">{s.name}</a>))}</dd></div>
          </dl>
        </div>
      </section>
    </SiteChrome>
  );
}
