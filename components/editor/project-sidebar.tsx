"use client";

import { FolderOpen, Plus, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

interface EmptyProjectsStateProps {
  icon: typeof FolderOpen;
  title: string;
  description: string;
}

function EmptyProjectsState({
  icon: Icon,
  title,
  description,
}: EmptyProjectsStateProps) {
  return (
    <div className="flex h-full min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border bg-elevated/70 px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-subtle text-copy-secondary">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mt-4 text-base font-medium text-copy-primary">{title}</h2>
      <p className="mt-2 max-w-56 text-sm leading-6 text-copy-muted">
        {description}
      </p>
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        "pointer-events-none absolute top-4 bottom-4 left-4 z-20 w-[min(24rem,calc(100%-2rem))] transition-transform duration-300 ease-out sm:top-6 sm:bottom-6 sm:left-6 sm:w-96",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)]",
        className
      )}
    >
      <div className="pointer-events-auto flex h-full flex-col rounded-3xl border border-surface-border bg-surface/88 p-4 shadow-[0_24px_90px_color-mix(in_srgb,var(--bg-base)_70%,transparent)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 border-b border-surface-border px-2 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-copy-faint">
              Workspace
            </p>
            <h1 className="mt-1 text-lg font-medium text-copy-primary">
              Projects
            </h1>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Close project sidebar"
            className="text-copy-secondary hover:bg-subtle hover:text-copy-primary"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs
          defaultValue="my-projects"
          className="mt-4 flex min-h-0 flex-1 flex-col gap-4"
        >
          <TabsList className="grid w-full grid-cols-2 bg-elevated">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="mt-0 flex flex-1">
            <EmptyProjectsState
              icon={FolderOpen}
              title="No projects yet"
              description="Create your first architecture workspace to start mapping a system."
            />
          </TabsContent>

          <TabsContent value="shared" className="mt-0 flex flex-1">
            <EmptyProjectsState
              icon={Users}
              title="Nothing shared yet"
              description="Collaborator projects will appear here once someone invites you in."
            />
          </TabsContent>
        </Tabs>

        <div className="pt-4">
          <Button className="w-full" size="lg" type="button">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
}
