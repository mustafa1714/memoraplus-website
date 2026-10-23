import type { Metadata } from "next";
import { DICT, type Locale } from "@/content/site";
import { PROJECTS, toCard } from "@/content/projects";
import { SiteChrome } from "@/components/SiteChrome";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(lang, "projects/", DICT[lang].meta.projectsTitle, DICT[lang].meta.projectsDescription);
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = DICT[lang].projects;
  return (
    <SiteChrome lang={lang} page="projects">
      <section className="mp-photo-hero mp-photo-hero--banner mp-dark" aria-labelledby="projects-title">
        <div className="mp-photo-hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/projects-head-1920.webp" srcSet="/media/projects-head-m.webp 800w, /media/projects-head-1920.webp 1920w" sizes="100vw" alt="" width={1920} height={720} fetchPriority="high" decoding="async" />
        </div>
        <div className="mp-photo-hero__scrim" />
        <div className="mp-container mp-photo-hero__inner">
          <div className="mp-photo-hero__panel">
            <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} lead={t.lead} id="projects-title" />
          </div>
        </div>
      </section>
      <section className="mp-section mp-section--soft mp-section--explorer">
        <div className="mp-container">
          <ProjectsExplorer lang={lang} projects={PROJECTS.map(toCard)} />
        </div>
      </section>
    </SiteChrome>
  );
}
