export function SectionHeading({ eyebrow, title, lead, center = false, as: Tag = "h2", id }: { eyebrow?: string; title: string; lead?: string; center?: boolean; as?: "h1" | "h2"; id?: string }) {
  return (
    <div className={`mp-heading${center ? " mp-heading--center" : ""}`}>
      {eyebrow && <p className="mp-heading__eyebrow">{eyebrow}</p>}
      <Tag className={`mp-heading__title${Tag === "h1" ? " mp-heading__title--h1" : ""}`} id={id}>{title}</Tag>
      <hr className="mp-heading__rule" />
      {lead && <p className="mp-heading__lead">{lead}</p>}
    </div>
  );
}
