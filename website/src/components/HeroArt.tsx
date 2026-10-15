/** Decorative brand composition (from the design-system cover): maroon slab with cream bars echoing the M/P monogram, navy block, gold band, cream base. Tokens only. */
export function HeroArt() {
  return (
    <svg className="mp-hero-art" viewBox="0 0 480 520" role="presentation" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <rect className="ha-maroon" x="0" y="0" width="260" height="520" />
      <rect className="ha-navy" x="260" y="0" width="220" height="300" />
      <rect className="ha-gold" x="260" y="300" width="220" height="16" />
      <rect className="ha-cream" x="260" y="316" width="220" height="204" />
      <rect className="ha-bar" x="44" y="168" width="28" height="352" rx="4" />
      <rect className="ha-bar" x="92" y="120" width="28" height="400" rx="4" />
      <rect className="ha-bar" x="140" y="72" width="28" height="280" rx="4" />
      <rect className="ha-bar" x="188" y="216" width="28" height="304" rx="4" />
      <rect className="ha-gold" x="300" y="64" width="28" height="160" rx="4" />
      <rect className="ha-line" x="348" y="64" width="2" height="160" />
    </svg>
  );
}
