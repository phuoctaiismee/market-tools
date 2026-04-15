"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { slugify } from "./utils/slug-utils-clean";
import { SlugPreviewCard } from "./components/slug-preview";
import { useTranslations } from "next-intl";

export const SlugGeneratorMain = () => {
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);
  const t = useTranslations("slug_generator");
  const common = useTranslations("common");

  const slug = slugify(title.trim() || t("sample_title"));
  const previewTitle = title.trim() || t("preview_title_default");
  const previewDescription = t("preview_description_default");
  const previewUrl = `https://example.com/${slug || t("slug_placeholder")}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <div className="grid gap-10">
       
          
          <div className="space-y-5">
            <div className="space-y-2">
              <Input
                id="slug-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder={t("input_title_placeholder")}
              />
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950/80">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                     <p className="font-semibold capitalize">
                    {t("slug_label")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {slug.length ?? 0} characters
                  </p>
                  <p className="mt-2 wrap-break-word text-base font-semibold text-foreground">
                    /{slug || t("slug_placeholder")}
                  </p>
                </div>
                <Button type="button" variant="secondary"  className="inline-flex items-center gap-2" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                  {copied ? common("copied") : common("copy")}
                </Button>
              </div>
            </div>
          </div>
        

        <SlugPreviewCard
          title={previewTitle}
          description={previewDescription}
          url={previewUrl}
        />
      </div>
    </div>
  );
};