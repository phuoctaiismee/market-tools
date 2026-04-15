"use client";

import React, { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sparkles, Wand2, Search, Type, Tag, PenTool } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "../ui/button";
import { useTranslations, useLocale } from "next-intl";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common");
  const tSlug = useTranslations("slug_generator");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (nextLocale: "en" | "vi") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-xs transition-all duration-300 ease-in-out", scrolled ? "shadow-xs" : "shadow-none")}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-zinc-900 dark:bg-zinc-100 p-1.5 rounded-lg">
                <Sparkles className="h-5 w-5 text-zinc-100 dark:text-zinc-900" />
              </div>
              <span className="font-bold text-xl tracking-tight">Market Tools</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent h-10 px-4")}>
                      {t("home")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-10 px-4">{t("tools")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-4 md:grid-cols-[280px_1fr] lg:w-[780px]">
                      <div className="rounded-xl border border-zinc-200 bg-zinc-950/95 p-6 text-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950/95">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-sky-400 mb-4">
                          <Sparkles className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight">Market Tools</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-300">
                          {t("tools_menu_description")}
                        </p>
                        <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-400">
                          <div className="rounded-2xl bg-zinc-900/80 p-3">All tools are equal access — no primary or secondary hierarchy.</div>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex items-start h-full w-full select-none flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-900 no-underline outline-none transition hover:border-sky-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                              href="/fancy-text"
                            >
                              <div className="flex items-center gap-3">
                                <Wand2 className="h-5 w-5 text-violet-500" />
                                <span className="text-lg font-semibold">Fancy Text</span>
                              </div>
                              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                                Professional Unicode text converter for all social platforms.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex items-start h-full w-full select-none flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-900 no-underline outline-none transition hover:border-sky-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                              href="/slug-generator"
                            >
                              <div className="flex items-center gap-3">
                                <Tag className="h-5 w-5 text-sky-500" />
                                <span className="text-lg font-semibold">{tSlug("title")}</span>
                              </div>
                              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                                Create clean URL-friendly slugs for Vietnamese text.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <ListItem title="Symbol Picker" icon={<Search className="h-5 w-5" />} comingSoon t_soon={t("soon")} />
                          <ListItem title="Bio Generator" icon={<PenTool className="h-5 w-5" />} comingSoon t_soon={t("soon")} />
                          <ListItem title="Font Explorer" icon={<Type className="h-5 w-5" />} comingSoon t_soon={t("soon")} />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent h-10 px-4")}>
                      {t("about")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Locale Switcher */}
            <Button variant="outline" size="icon" onClick={() => switchLocale(locale === "en" ? "vi" : "en")} >
              <span className="">{locale === "en" ? "EN" : "VI"}</span>
            </Button>

            <ModeToggle />
            {/* <nav className="flex items-center gap-2">
              <Link href="/fancy-text" className={buttonVariants({ variant: "default", size: "lg" })}>
                {t("try_app")}
              </Link>
            </nav> */}
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  );
};

const ListItem = ({ title, icon, comingSoon, t_soon }: { title: string; icon: React.ReactNode; comingSoon?: boolean; t_soon: string }) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <div className={cn(
          "block select-none space-y-1 rounded-xl border border-zinc-200 bg-white p-4 leading-none text-left text-zinc-900 no-underline outline-none transition hover:border-sky-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100",
          comingSoon ? "opacity-80 cursor-not-allowed" : ""
        )}>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">{icon}</span>
            <div className="text-sm font-bold leading-none">{title}</div>
            {comingSoon && (
              <Badge variant="secondary">{t_soon}</Badge>
            )}
          </div>
        </div>
      </NavigationMenuLink>
    </div>
  );
};
