import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { LOCALES, LOCALE_META, isLocale } from "@/content/site";
import "@/styles/fonts.css";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/site.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const meta = LOCALE_META[lang];
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className="mp-no-js">
      <body className="mp-root" lang={meta.htmlLang}>{children}</body>
    </html>
  );
}
