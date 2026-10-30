import { NavLink } from "react-router-dom";
import { categories } from "@/data/content";

const tabs = [
  { to: "/work", label: "All" },
  ...categories.map((c) => ({ to: `/work/category/${c.slug}`, label: c.label })),
  { to: "/work/videos", label: "Videos" },
];

// Sub-nav for the Work section. `current` marks a tab active on pages whose
// URL doesn't match it, such as a case study showing its category.
const WorkNav = ({ current }: { current?: string }) => (
  <nav aria-label="Work" className="sticky top-0 z-20 border-y border-white/10 bg-[#012b62]/90 backdrop-blur">
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

export default WorkNav;
