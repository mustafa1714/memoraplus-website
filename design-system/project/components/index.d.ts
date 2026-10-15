/** Memora Plus — vanilla JS helpers exposed as window.MemoraPlus (no framework). Components are HTML + CSS classes; see each components/<Comp>/README.md. */
declare namespace MemoraPlus {
  /** WhatsApp number in international format without "+": "905436227764". */
  const PHONE: string;
  /** Names of the built-in line icons. */
  const icons: Array<"whatsapp-chat" | "phone" | "pin" | "calendar" | "building" | "arrow" | "play" | "globe" | "menu" | "close" | "check">;
  /** SVG markup for an icon (inherits currentColor, aria-hidden). */
  function icon(name: string, extraClass?: string): string;
  /** https://wa.me link with a prefilled message (default: general enquiry). */
  function whatsappUrl(message?: string): string;
  /** The approved per-project message: «مرحباً ميمورا بلس، أرغب بمعرفة تفاصيل مشروع: <name>». */
  function projectMessage(projectName: string): string;
  /** "$250,000" — USD, no decimals. */
  function formatPrice(value: number, lang?: "ar" | "en" | "tr"): string;
  /** Replace every <span data-mp-icon="name" data-class="…"> with its SVG. */
  function renderIcons(root?: ParentNode): void;
  /** Fill href of every [data-mp-whatsapp] (uses data-project for the project message). */
  function wireWhatsApp(root?: ParentNode): void;
  interface HeaderOptions { threshold?: number; scroller?: Window | HTMLElement; static?: boolean }
  /** Compact header after scroll + mobile menu toggle ([data-mp-menu-toggle], [data-mp-menu-panel]). */
  function initHeader(el: HTMLElement, opts?: HeaderOptions): void;
  /** Chip filtering of [data-mp-card] by data-location / data-type / data-status. */
  function initFilters(el: HTMLElement): void;
  /** Click-to-load YouTube (youtube-nocookie) from data-youtube-id. data-demo disables YouTube loading.
   *  Without a YouTube ID (or with data-demo), data-video-src plays a local clip in a <video controls> (poster from data-poster); a .mp-demo-badge child is kept. */
  function initVideo(el: HTMLElement): void;
  interface CookieOptions { ignoreSaved?: boolean; onChoice?: (accepted: boolean) => void }
  /** Consent banner; stores choice in localStorage "mp-consent-v1"; dispatches document "mp:consent" {analytics:boolean}. */
  function initCookieBanner(el: HTMLElement, opts?: CookieOptions): void;
  /** Fade-up once for [data-mp-reveal]; skipped under prefers-reduced-motion. */
  function initReveal(root?: ParentNode): void;
  /** Runs renderIcons, wireWhatsApp and every init on [data-mp-*] elements. */
  function initAll(root?: ParentNode): void;
}
