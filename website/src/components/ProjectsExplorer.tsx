"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/content/site";
import { DICT } from "@/content/site";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Icon } from "./Icon";

type Key = "side" | "type" | "status";

export function ProjectsExplorer({ lang, projects }: { lang: Locale; projects: Project[] }) {
  const t = DICT[lang].projects;
  const f = t.filters;
  const [state, setState] = useState<Record<Key, string>>({ side: "", type: "", status: "" });

  const groups: { key: Key; label: string; options: { value: string; label: string }[] }[] = [
    { key: "side", label: f.location, options: [{ value: "europe", label: f.europe }, { value: "asia", label: f.asia }] },
    { key: "type", label: f.type, options: [{ value: "residential", label: f.residential }, { value: "commercial", label: f.commercial }, { value: "investment", label: f.investment }] },
    { key: "status", label: f.status, options: [{ value: "ready", label: f.ready }, { value: "construction", label: f.construction }] },
  ];

  const shown = useMemo(
    () => projects.filter((p) => (!state.side || p.side === state.side) && (!state.type || p.type === state.type) && (!state.status || p.status === state.status)),
    [projects, state]
  );

  return (
    <div className="mp-explorer">
      <div className="mp-filters mp-filters--panel">
        {groups.map((g) => (
          <div key={g.key} className="mp-filters__group" role="group" aria-labelledby={`f-${g.key}`}>
            <span className="mp-filters__legend" id={`f-${g.key}`}>{g.label}</span>
            {[{ value: "", label: f.all }, ...g.options].map((o) => {
              const pressed = state[g.key] === o.value;
              return (
                <button key={o.value || "all"} type="button" className="mp-chip" aria-pressed={pressed} onClick={() => setState((s) => ({ ...s, [g.key]: o.value }))}>
                  <Icon name="check" />{o.label}
                </button>
              );
            })}
          </div>
        ))}
        <p className="mp-filters__status" aria-live="polite">{t.count(shown.length)}</p>
      </div>
      <div className="mp-grid">
        {shown.length > 0 ? (
          <ul className="mp-grid__list">
            {shown.map((p) => (<li key={p.id}><ProjectCard project={p} lang={lang} headingLevel={2} /></li>))}
          </ul>
        ) : (
          <p className="mp-filters__empty">{t.empty}</p>
        )}
      </div>
    </div>
  );
}
