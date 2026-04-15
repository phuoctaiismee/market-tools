import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 items-stretch", className)}>
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "min-h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors",
        className
      )}
    >
      {header}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
            {icon}
            <div className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
            {title}
            </div>
        </div>
        <div className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
