"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { styles, transformText, combineWithMarks } from "./utils/unicode-utils";
import { FancyItem } from "./components/fancy-item";
import { Sparkles, Crown } from "lucide-react";
import { useTranslations } from "next-intl";

export const FancyTextMain = () => {
  const [inputText, setInputText] = useState("");
  const t = useTranslations("fancy_text");

  const getStyleContent = (style: typeof styles[0]) => {
    const baseText = inputText || t("sample_text");
    let result = baseText;

    if (style.map) {
      result = transformText(baseText, style.map);
    } else if (style.mark) {
      result = combineWithMarks(baseText, style.mark);
    }

    if (style.left && style.right) {
      result = `${style.left}${result}${style.right}`;
    }

    return result;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Simple Input Section */}
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

      {/* Results List */}
      <div className="space-y-6 pt-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900 pb-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
            {t("results_title")}
          </h3>
          <span className="text-[9px] text-zinc-400 font-mono italic opacity-50">
            {t("results_hint")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {styles.map((style, index) => (
            <FancyItem
              key={index}
              title={style.name}
              isSafe={style.isSafe}
              content={getStyleContent(style)}
            />
          ))}
        </div>
      </div>

      {/* Footer Info - Luxury Minimalist */}
      <div className="max-w-md mx-auto pt-12 text-center space-y-3 opacity-60 hover:opacity-100 transition-opacity pb-20">
        <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500">
           <Crown className="h-3 w-3" />
           <span className="text-[9px] font-black uppercase tracking-[0.4em]">{t("vn_safe_title")}</span>
        </div>
        <p className="text-[9px] text-zinc-400 leading-relaxed font-medium uppercase tracking-widest max-w-[280px] mx-auto">
          {t("vn_safe_description")}
        </p>
      </div>
    </div>
  );
};
