import { Sparkles } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export const SiteFooter = () => {
  const t = useTranslations("common");

  return (
    <footer className="w-full py-12 px-4 sm:px-6 mt-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
          <span className="font-bold text-lg tracking-tight">Market Tools</span>
        </div>
        
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">{t("privacy")}</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">{t("terms")}</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">{t("contact")}</Link>
          <a href="#" className="hover:text-foreground transition-colors">{t("twitter")}</a>
        </div>
        
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Market Tools. {t("built_with")}.
        </p>
      </div>
    </footer>
  );
};
