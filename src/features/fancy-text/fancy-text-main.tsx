"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { styles, decorations, transformText, combineWithMarks } from "./utils/unicode-utils";
import { FancyItem } from "./components/fancy-item";
import { Sparkles } from "lucide-react";

export const FancyTextMain = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Simple Input Section */}

      <div className="relative shadow rounded-lg">
        <Textarea
          placeholder="Type something amazing here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[100px] resize-none p-4"
        />
        <div className="absolute right-4 bottom-4 opacity-30">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>


      {/* Results List */}
      <div className="space-y-6 pt-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Pick Style</h3>
          <span className="text-xs text-zinc-400 font-mono italic">Results update as you type</span>
        </div>

        <div className="space-y-3">
          {/* Decorations first as they are quick pickups */}
          {decorations.map((deco, index) => (
            <FancyItem
              key={`deco-${index}`}
              title="Decorated"
              content={`${deco.left}${inputText || "Sample Text"}${deco.right}`}
            />
          ))}

          {/* All unicode styles */}
          {styles.map((style, index) => (
            <FancyItem
              key={index}
              title={style.name}
              content={
                style.map
                  ? transformText(inputText || "Sample Text", style.map)
                  : combineWithMarks(inputText || "Sample Text", style.mark!)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
