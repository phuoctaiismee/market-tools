import { Link } from "@/navigation";
import { ArrowRight, Sparkles, Shield, Zap, Wand2, Search, Tag, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/shared/bento-grid";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const common = useTranslations("common");

  return (
    <>
      {/* Simplified Functional Hero Section */}
      <section className="relative h-[calc(100vh-64px)] flex flex-col items-center justify-center container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("hero_tagline")}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              {t("hero_title_1")} <br className="hidden md:block" />
              {t("hero_title_2")}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t("hero_description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-lg font-bold group">
              <Link href="#tools">
                {common("explore_tools")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-zinc-200 dark:border-zinc-800 text-lg font-semibold">
               <Link href="/fancy-text">{common("launch_app")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vibrant Tool Exhibition (Bento Grid) */}
      <section id="tools" className="py-24 container mx-auto px-4">
        <div className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">{t("ecosystem_title")}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto">
              {t("ecosystem_description")}
            </p>
          </div>

          <BentoGrid className="max-w-6xl">
              <Link href="/fancy-text" className="group">
              <BentoGridItem
                title={t("fancy_text_title")}
                description={t("fancy_text_description")}
                header={
                  <div className="h-40 bg-violet-500/10 dark:bg-violet-500/5 rounded-xl flex items-center justify-center border border-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                    <Wand2 className="h-12 w-12 text-violet-500" />
                  </div>
                }
                icon={<Wand2 className="h-4 w-4 text-violet-500" />}
                className="h-full hover:border-violet-500/30 transition-all shadow-sm hover:shadow-md"
              />
            </Link>

            <Link href="/slug-generator" className="group">
              <BentoGridItem
                title={t("slug_generator_title")}
                description={t("slug_generator_description")}
                header={
                  <div className="h-40 bg-sky-500/10 dark:bg-sky-500/5 rounded-xl flex items-center justify-center border border-sky-500/10 transition-colors group-hover:bg-sky-500/20">
                    <Tag className="h-12 w-12 text-sky-500" />
                  </div>
                }
                icon={<Tag className="h-4 w-4 text-sky-500" />}
                className="h-full hover:border-sky-500/30 transition-all shadow-sm hover:shadow-md"
              />
            </Link>

            <div className="opacity-70 group">
              <BentoGridItem
                title={
                  <div className="flex items-center gap-2">
                    {t("symbol_picker_title")} <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 dark:text-amber-500 border-none px-1.5 py-0 h-4 uppercase text-[9px] font-black">{common("soon")}</Badge>
                  </div>
                }
                description={t("symbol_picker_description")}
                header={
                  <div className="h-40 bg-amber-500/10 dark:bg-amber-500/5 rounded-xl flex items-center justify-center border border-amber-500/10 transition-colors group-hover:bg-amber-500/20">
                    <Search className="h-12 w-12 text-amber-500" />
                  </div>
                }
                icon={<Search className="h-4 w-4 text-amber-500" />}
                className="h-full"
              />
            </div>

            <div className="opacity-70 group">
              <BentoGridItem
                title={
                  <div className="flex items-center gap-2">
                    {t("bio_generator_title")} <Badge variant="secondary" className="bg-rose-500/10 text-rose-600 dark:text-rose-500 border-none px-1.5 py-0 h-4 uppercase text-[9px] font-black">{common("soon")}</Badge>
                  </div>
                }
                description={t("bio_generator_description")}
                header={
                  <div className="h-40 bg-rose-500/10 dark:bg-rose-500/5 rounded-xl flex items-center justify-center border border-rose-500/10 transition-colors group-hover:bg-rose-500/20">
                    <PenTool className="h-12 w-12 text-rose-500" />
                  </div>
                }
                icon={<PenTool className="h-4 w-4 text-rose-500" />}
                className="h-full"
              />
            </div>

            <Link href="#" className="md:col-span-2 opacity-70 group cursor-not-allowed">
              <BentoGridItem
                title={
                  <div className="flex items-center gap-2">
                    {t("growth_trends_title")} <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-none px-1.5 py-0 h-4 uppercase text-[9px] font-black">{common("soon")}</Badge>
                  </div>
                }
                description={t("growth_trends_description")}
                header={
                  <div className="h-40 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-xl flex items-center justify-center border border-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                    <Sparkles className="h-12 w-12 text-emerald-500" />
                  </div>
                }
                icon={<Sparkles className="h-4 w-4 text-emerald-500" />}
                className="h-full"
              />
            </Link>
          </BentoGrid>
        </div>
      </section>

      {/* Global Standards */}
      <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                <Shield className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{t("feature_safe_title")}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
                {t("feature_safe_description")}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                <Zap className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{t("feature_speed_title")}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
                {t("feature_speed_description")}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                <Sparkles className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{t("feature_free_title")}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
                {t("feature_free_description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
