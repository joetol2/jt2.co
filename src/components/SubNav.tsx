import { NavLink } from "react-router-dom";

// Section sub-nav (Work, Lab). `current` marks a tab active on pages whose
// URL doesn't match it, such as a case study showing its category.
const SubNav = ({ label, tabs, current }: { label: string; tabs: { to: string; label: string }[]; current?: string }) => (
  <nav aria-label={label} className="border-y border-white/10">
    <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end
          className={({ isActive }) =>
            `shrink-0 py-4 text-xs font-heading tracking-[0.2em] uppercase border-b-2 transition-colors duration-300 ${
              isActive || current === t.to
                ? "border-white text-white"
                : "border-transparent text-white/50 hover:text-white"
            }`
          }
        >
          {t.label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default SubNav;
