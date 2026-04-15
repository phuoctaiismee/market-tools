"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

interface FancyItemProps {
  title: string;
  content: string;
  badge?: string;
}

export const FancyItem = ({ title, content, badge }: FancyItemProps) => {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("common");

  const copyToClipboard = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success(t("copied"), {
      description: title,
      duration: 1000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center justify-between p-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm hover:shadow-md">
      <div className="grow space-y-1 overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
            {title}
          </span>
          {badge && (
            <Badge className="h-4 px-1.5 text-[8px] font-black tracking-tighter bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-900/50 hover:bg-amber-100">
              {badge.toUpperCase()}
            </Badge>
          )}
        </div>
        <p className="text-xl md:text-2xl font-medium wrap-break-word truncate text-zinc-900 dark:text-zinc-100 pr-4">
          {content || t("preview")}
        </p>
      </div>

      <Button
        variant="ghost"
        className={cn(
          "h-10 w-10 p-0 rounded-xl transition-all duration-300",
          copied 
            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" 
            : "hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500"
        )}
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-5 w-5 animate-in zoom-in duration-300" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
