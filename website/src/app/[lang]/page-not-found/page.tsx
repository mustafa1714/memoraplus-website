import type { Metadata } from "next";
import { DICT, type Locale } from "@/content/site";
import { NotFoundView } from "@/components/NotFoundView";

/**
 * The 404 page in each language (/<lang>/page-not-found/). The host serves it with a 404 status for missing URLs
 * under /<lang>/ (public/<lang>/.htaccess); the root 404.html falls back to it in the browser.
 */
export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = DICT[lang];
  return { title: `${t.notFound.title} | ${t.meta.title.split(" | ")[0]}`, robots: { index: false, follow: true } };
}

export default async function NotFoundPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return <NotFoundView lang={lang} />;
}
