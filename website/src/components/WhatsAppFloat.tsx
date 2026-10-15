import { Icon } from "./Icon";

export function WhatsAppFloat({ url, label }: { url: string; label: string }) {
  return (
    <a className="mp-wa-float" href={url} target="_blank" rel="noopener" aria-label={label}>
      <Icon name="whatsapp-chat" />
      <span className="mp-wa-float__label">{label}</span>
    </a>
  );
}
