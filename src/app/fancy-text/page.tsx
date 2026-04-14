import React from "react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { FancyTextMain } from "@/features/fancy-text/fancy-text-main";

export const metadata = {
  title: "Fancy Text Tool | Market Tools",
  description: "Style your text with unique Unicode characters for social media.",
};

export default function FancyTextPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-4 text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                Fancy Text Decorator
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                Transform your ordinary text into extraordinary styles suitable for any social platform.
              </p>
            </div>
            
            <FancyTextMain />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
