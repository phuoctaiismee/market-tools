import React from "react";
import { Sparkles } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 mt-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
          <span className="font-bold text-lg tracking-tight">Market Tools</span>
        </div>
        
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
        
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Market Tools. Built with Shadcn/ui.
        </p>
      </div>
    </footer>
  );
};
