"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Layers3,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const signalItems = [
  "Starter templates load directly into the active shared room.",
  "AI generation is queued as durable background work, not request-time logic.",
  "Theme tokens are wired through CSS variables and Tailwind utilities only.",
  "All seven requested shadcn primitives import cleanly in this workspace.",
];

export function DesignSystemShowcase() {
  const [prompt, setPrompt] = useState(
    "Map a collaborative architecture editor with AI-assisted graph generation."
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-base text-copy-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, var(--accent-primary-dim), transparent 28%), radial-gradient(circle at 82% 12%, color-mix(in srgb, var(--accent-ai) 26%, transparent), transparent 24%), linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--bg-surface) 60%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 sm:px-10">
        <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-surface-border bg-surface/80 px-6 py-6 shadow-[0_24px_120px_color-mix(in_srgb,var(--bg-base)_55%,transparent)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand/30 bg-accent-dim px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-brand">
              Feature Spec 01
            </span>
            <span className="rounded-full border border-surface-border-subtle bg-elevated px-3 py-1 text-xs text-copy-secondary">
              Dark technical workspace
            </span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-copy-faint">
                Ghost AI design system
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-copy-primary sm:text-5xl">
                Shared UI foundation for collaborative system design.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-copy-secondary">
                The app shell now has the requested shadcn primitives, the
                `cn()` utility, lucide icons, and a token-driven dark theme that
                avoids default light styling.
              </p>
            </div>
            <Card className="border border-surface-border bg-elevated/90 ring-0">
              <CardHeader>
                <CardTitle>Foundation status</CardTitle>
                <CardDescription>
                  Theme variables are live and ready for the next feature units.
                </CardDescription>
                <CardAction className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                  Ready
                </CardAction>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 text-sm text-copy-secondary">
                <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3">
                  <p className="text-copy-faint">Primitives</p>
                  <p className="mt-1 text-lg font-semibold text-copy-primary">7</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3">
                  <p className="text-copy-faint">Theme mode</p>
                  <p className="mt-1 text-lg font-semibold text-copy-primary">
                    Dark only
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </header>

        <section className="grid flex-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border border-surface-border bg-surface/90 ring-0 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-4 text-brand" />
                Component playground
              </CardTitle>
              <CardDescription>
                Buttons, cards, dialog, and icon treatment aligned to the
                workspace theme.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Button>
                  Generate draft
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="border border-surface-border bg-subtle text-copy-primary hover:bg-elevated"
                >
                  <Layers3 className="size-4 text-ai-text" />
                  Import template
                </Button>
                <Button
                  variant="outline"
                  className="border-surface-border bg-surface text-copy-secondary hover:bg-subtle hover:text-copy-primary"
                >
                  <Bot className="size-4 text-brand" />
                  Invite AI copilot
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Surface scale",
                    value: "Base / surface / elevated",
                    tone: "text-brand",
                  },
                  {
                    title: "Typography",
                    value: "Geist Sans + Mono",
                    tone: "text-ai-text",
                  },
                  {
                    title: "Interaction",
                    value: "shadcn + lucide",
                    tone: "text-success",
                  },
                  {
                    title: "Styling rule",
                    value: "Token-only colors",
                    tone: "text-warning",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-surface-border bg-elevated px-4 py-4"
                  >
                    <p className="text-sm text-copy-faint">{item.title}</p>
                    <p className={`mt-2 text-sm font-medium ${item.tone}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <Dialog>
                <DialogTrigger className="inline-flex">
                  <Button
                    variant="ghost"
                    className="border border-surface-border bg-surface text-copy-primary hover:bg-subtle"
                  >
                    <MessageSquareText className="size-4 text-brand" />
                    Preview dialog
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl rounded-3xl border border-surface-border bg-elevated p-0 ring-0">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>AI generation request</DialogTitle>
                    <DialogDescription>
                      Dialog styling inherits the same surface, border, and type
                      scale tokens as the rest of the workspace.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 px-6 pb-6">
                    <Input
                      value="Event-driven commerce platform"
                      readOnly
                      className="border-surface-border bg-subtle text-copy-primary"
                    />
                    <Textarea
                      value={prompt}
                      onChange={(event) => setPrompt(event.target.value)}
                      className="min-h-28 border-surface-border bg-subtle text-copy-primary"
                    />
                  </div>
                  <DialogFooter
                    showCloseButton
                    className="rounded-b-3xl border-surface-border bg-surface/90"
                  >
                    <Button className="min-w-28">Queue task</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
            <CardFooter className="border-surface-border bg-elevated/70 text-copy-secondary">
              The page doubles as a smoke test for all requested imports.
            </CardFooter>
          </Card>

          <Tabs
            defaultValue="inputs"
            className="rounded-3xl border border-surface-border bg-surface/90 p-4 backdrop-blur-sm"
          >
            <TabsList className="bg-elevated">
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="inputs" className="mt-4">
              <Card className="border border-surface-border bg-transparent ring-0">
                <CardHeader>
                  <CardTitle>Prompt composition</CardTitle>
                  <CardDescription>
                    Input, textarea, button, and tabs are styled against the
                    same dark token set.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="project-name"
                      className="text-sm font-medium text-copy-secondary"
                    >
                      Project name
                    </label>
                    <Input
                      id="project-name"
                      placeholder="Ghost AI workspace"
                      className="border-surface-border bg-subtle text-copy-primary placeholder:text-copy-faint"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="design-prompt"
                      className="text-sm font-medium text-copy-secondary"
                    >
                      Generation prompt
                    </label>
                    <Textarea
                      id="design-prompt"
                      value={prompt}
                      onChange={(event) => setPrompt(event.target.value)}
                      className="min-h-36 border-surface-border bg-subtle text-copy-primary placeholder:text-copy-faint"
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-between border-surface-border bg-elevated/70">
                  <span className="text-xs text-copy-faint">
                    Durable jobs belong in background tasks.
                  </span>
                  <Button>Save draft</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="mt-4">
              <Card className="h-full border border-surface-border bg-transparent ring-0">
                <CardHeader>
                  <CardTitle>Implementation checklist</CardTitle>
                  <CardDescription>
                    Scroll area content verifies the final primitive in the spec.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80 rounded-2xl border border-surface-border bg-elevated p-1">
                    <div className="space-y-3 p-3">
                      {signalItems.map((item, index) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-surface-border bg-surface px-4 py-4"
                        >
                          <p className="text-xs uppercase tracking-[0.2em] text-copy-faint">
                            Check {index + 1}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-copy-secondary">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}
