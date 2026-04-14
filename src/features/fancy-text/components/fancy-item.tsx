"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface FancyItemProps {
  title: string;
  content: string;
}

export const FancyItem = ({ title, content }: FancyItemProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copied!", {
      description: title,
      duration: 1000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center justify-between p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
      <div className="grow space-y-1 overflow-hidden">
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500">
          {title}
        </span>
        <p className="text-xl md:text-2xl wrap-break-word truncate text-zinc-900 dark:text-zinc-100 pr-4">
          {content || "Preview..."}
        </p>
      </div>

      <Button
        className={cn(
          copied ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
        )}
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-5 w-5" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
};
