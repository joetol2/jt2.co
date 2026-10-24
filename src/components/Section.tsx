import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Section({ children, dark = false, id }: { children: React.ReactNode; dark?: boolean; id?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id={id}
      className="py-20 sm:py-28 border-t border-border"
      style={dark ? { backgroundColor: "#012b62" } : undefined}
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-heading tracking-[0.3em] uppercase text-muted-foreground mb-6">
      {children}
    </p>
  );
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight leading-[1.15] mb-6">
      {children}
    </h2>
  );
}

export function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-white/70 leading-relaxed">{children}</p>;
}

export const primaryButton =
  "inline-flex items-center gap-2 px-6 py-3 bg-white text-[#012b62] text-sm font-heading font-semibold tracking-wide uppercase rounded hover:bg-white/90 transition-colors duration-300";

export const secondaryButton =
  "inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-heading font-medium tracking-wide uppercase rounded hover:border-white/80 transition-colors duration-300";
