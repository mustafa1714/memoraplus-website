const PATHS: Record<string, React.ReactNode> = {
  "whatsapp-chat": (<><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.3 18.5z" /><path d="M9 9.5c.3 1.8 1.7 3.3 3.5 3.8l1-1 1.7.8-.4 1.4c-3 .2-6-2.7-5.9-5.8l1.4-.4.8 1.7z" /></>),
  phone: <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  pin: (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></>),
  calendar: (<><rect x="4" y="5.5" width="16" height="14.5" rx="2" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /></>),
  building: <path d="M4.5 20.5V8l7.5-4.5L19.5 8v12.5M9 20.5v-6h6v6M8.5 10.5h1M14.5 10.5h1M3 20.5h18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  play: <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />,
  globe: (<><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.6 3.6 5.4 3.6 8.5s-1.1 5.9-3.6 8.5c-2.5-2.6-3.6-5.4-3.6-8.5s1.1-5.9 3.6-8.5z" /></>),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l8-8M16 7l2 2M14 9l2 2" /></>),
  chart: <path d="M4 20h16M7 16v-4M12 16V8M17 16v-7M6 9l5-4 4 3 4-4" />,
  shop: <path d="M4 9.5l1.5-5h13l1.5 5M4 9.5h16M4 9.5v10h16v-10M9.5 19.5v-5h5v5M4 9.5c0 1.4 1.1 2.5 2.7 2.5S9.3 10.9 9.3 9.5M9.3 9.5c0 1.4 1.2 2.5 2.7 2.5s2.7-1.1 2.7-2.5M14.7 9.5c0 1.4 1.2 2.5 2.7 2.5S20 10.9 20 9.5" />,
  clock: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>),
  scale: <path d="M12 4v16M7 20h10M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z" />,
  bolt: <path d="M13 3L5 13.5h6L10 21l8-10.5h-6z" />,
  tag: (<><path d="M3.5 12.5V4.5h8l9 9-8 8z" /><circle cx="8" cy="9" r="1.5" /></>),
  star: <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />,
};

export function Icon({ name, className = "", dir = false }: { name: keyof typeof PATHS | string; className?: string; dir?: boolean }) {
  return (
    <svg className={`mp-icon mp-icon--${name}${dir ? " mp-icon--dir" : ""} ${className}`.trim()} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  );
}
