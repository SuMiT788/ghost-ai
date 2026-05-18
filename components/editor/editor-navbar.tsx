"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header
      className={cn(
        "flex h-16 items-center border-b border-surface-border bg-surface/95 px-4 backdrop-blur-xl sm:px-6",
        className
      )}
    >
      <div className="flex flex-1 items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          className="border border-transparent text-copy-secondary hover:border-surface-border hover:bg-subtle hover:text-copy-primary"
          onClick={onSidebarToggle}
        >
          <SidebarIcon className="h-5 w-5" />
        </Button>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.28em] text-copy-faint">
            Ghost AI
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
          Editor Workspace
        </span>
      </div>

      <div className="flex flex-1 justify-end" />
    </header>
  );
}
