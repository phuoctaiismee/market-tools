import { Shield, Sparkles, Zap, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About Us | Market Tools",
  description: "Learn about Market Tools, our mission, and our commitment to privacy.",
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 space-y-24">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
             {t("hero_title_1")} <br /> 
             <span className="text-zinc-400">{t("hero_title_2")}</span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            {t("hero_description")}
          </p>
        </section>

        {/* Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-violet-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Shield className="h-6 w-6 text-violet-500" />
            </div>
            <h3 className="text-2xl font-bold">{t("value_privacy_title")}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("value_privacy_description")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Zap className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold">{t("value_performance_title")}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("value_performance_description")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-rose-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Sparkles className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold">{t("value_unicode_title")}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("value_unicode_description")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Heart className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold">{t("value_free_title")}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("value_free_description")}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-2xl mx-auto space-y-8 py-12">
           <h2 className="text-3xl font-bold">{t("story_title")}</h2>
           <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <p>{t("story_p1")}</p>
              <p>{t("story_p2")}</p>
           </div>
        </section>
      </div>
    </div>
  );
}
