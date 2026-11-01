import type { Role } from "@/data/experience";

// One role on the Experience page and the Work employer hubs.
const RoleBlock = ({ role }: { role: Role }) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
      <h3 className="text-lg sm:text-xl font-heading font-semibold print:break-after-avoid">{role.title}</h3>
      <p className="text-sm font-heading text-white/60 print:text-black">{role.years}</p>
    </div>
    {role.team && <p className="text-sm text-white/60 mb-3 print:text-black">{role.team}</p>}
    {role.summary && <p className="text-base text-white/80 leading-relaxed mb-4 print:text-black">{role.summary}</p>}
    <ul className="space-y-2 text-sm sm:text-base text-white/75 leading-relaxed print:text-black print:list-disc print:pl-5">
      {role.bullets.map((b) => (
        <li key={b.slice(0, 40)} className="flex items-start gap-3 print:list-item">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 print:hidden" />
          {b}
        </li>
      ))}
    </ul>
    {role.lists?.map((l) => (
      <div key={l.label} className="mt-4">
        <p className="text-xs font-heading tracking-[0.2em] uppercase text-muted-foreground mb-2 print:text-black">{l.label}</p>
        <div className="flex flex-wrap gap-2">
          {l.items.map((i) => (
            <span key={i} className="text-xs text-white/70 border border-white/15 rounded px-2 py-1 print:text-black print:border-black/30">
              {i}
            </span>
          ))}
        </div>
      </div>
    ))}
    {role.placeholders?.map((p) => (
      <p key={p} className="mt-4 rounded border border-dashed border-amber-200/40 px-3 py-2 text-xs text-amber-100/80 print:hidden">
        Coming soon: {p}
      </p>
    ))}
  </div>
);

export default RoleBlock;
