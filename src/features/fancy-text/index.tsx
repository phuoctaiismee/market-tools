"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { styles, transformText } from "./utils/unicode-utils";
import { FancyItem } from "./components/fancy-item";
import { Sparkles, Crown } from "lucide-react";
import { useTranslations } from "next-intl";

export const FancyTextMain = () => {
  const [inputText, setInputText] = useState("");
  const t = useTranslations("fancy_text");

  const getStyleContent = (style: typeof styles[0]) => {
    const baseText = inputText || t("sample_text");
    let result = baseText;

    if (style.map || style.mark || style.separator || style.charWrap) {
      result = transformText(baseText, style);
    }

    if (style.left && style.right) {
      result = `${style.left}${result}${style.right}`;
    }

    return result;
  };

  const styleGroups: Record<string, typeof styles> = {
    basic: styles.filter((style) => style.category === "basic"),
    luxury: styles.filter((style) => style.category === "luxury"),
    decorator: styles.filter((style) => style.category === "decorator"),
  };

  const groupLabels: Record<string, string> = {
    basic: "Basic Styles",
    luxury: "Luxury Styles",
    decorator: "Decorator Styles",
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <div className="relative group max-w-2xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-zinc-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <div className="relative shadow-sm rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <Textarea
            placeholder={t("textarea_placeholder")}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[120px] resize-none p-6 border-none focus-visible:ring-0 bg-transparent text-lg font-medium"
          />
          <div className="absolute right-6 bottom-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <Sparkles className="h-6 w-6 text-amber-500" />
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900 pb-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
            {t("results_title")}
          </h3>
          <span className="text-[9px] text-zinc-400 font-mono italic opacity-50">
            {t("results_hint")}
          </span>
        </div>

        <div className="space-y-8">
          {Object.entries(styleGroups).map(([groupKey, groupStyles]) => (
            <div key={groupKey} className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {groupLabels[groupKey]}
                  </h4>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    {groupStyles.length} {groupKey} options
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 border-none rounded-full px-2 py-1">
                  {groupLabels[groupKey].split(" ")[0]}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {groupStyles.map((style, index) => (
                  <FancyItem
                    key={`${groupKey}-${index}`}
                    title={style.name}
                    badge={style.badge}
                    content={getStyleContent(style)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
