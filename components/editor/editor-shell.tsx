"use client";

import { useState } from "react";
import { Blocks, Sparkles, Workflow } from "lucide-react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

const shellSignals = [
  {
    icon: Blocks,
    label: "Floating sidebar",
    description: "Projects drawer overlays the canvas instead of shifting the layout.",
  },
  {
    icon: Workflow,
    label: "Reusable chrome",
    description: "Navbar and sidebar are separated into editor components for later chapters.",
  },
  {
    icon: Sparkles,
    label: "Dialog ready",
    description: "The existing token-driven dialog primitives are ready for future editor flows.",
  },
];

export function EditorShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
      />

      <div className="relative flex flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="relative flex flex-1 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 20%, var(--accent-primary-dim), transparent 24%), radial-gradient(circle at 84% 14%, color-mix(in srgb, var(--accent-ai) 24%, transparent), transparent 20%), linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 70%, transparent) 0%, color-mix(in srgb, var(--bg-surface) 35%, transparent) 100%), linear-gradient(color-mix(in srgb, var(--border-default) 70%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border-default) 70%, transparent) 1px, transparent 1px)",
              backgroundSize: "auto, auto, auto, 28px 28px, 28px 28px",
            }}
          />

          <div className="relative flex flex-1 items-center justify-center p-6 sm:p-8">
            <section className="w-full max-w-4xl rounded-3xl border border-surface-border bg-surface/72 p-6 shadow-[0_30px_120px_color-mix(in_srgb,var(--bg-base)_65%,transparent)] backdrop-blur-xl sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand/30 bg-accent-dim px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-brand">
                  Feature Spec 02
                </span>
                <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
                  Editor foundation
                </span>
              </div>

              <div className="mt-8 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-copy-faint">
                  Shared workspace shell
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-copy-primary sm:text-5xl">
                  Base chrome for every editor screen.
                </h1>
                <p className="mt-4 text-base leading-7 text-copy-secondary">
                  The navbar toggle, floating projects drawer, and token-driven
                  workspace surfaces are in place so the next editor chapters can
                  plug into a stable shell.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {shellSignals.map(({ icon: Icon, label, description }) => (
                  <article
                    key={label}
                    className="rounded-2xl border border-surface-border bg-elevated/90 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-border bg-subtle text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-base font-medium text-copy-primary">
                      {label}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-copy-secondary">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
