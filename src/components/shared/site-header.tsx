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
import { Sparkles, Wand2, Search, Type, PenTool } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "../ui/button";
import { useTranslations, useLocale } from "next-intl";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common");
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-zinc-900 hover:bg-zinc-800 p-6 no-underline outline-none focus:shadow-md dark:bg-zinc-100"
                            href="/fancy-text"
                          >
                            <Wand2 className="h-6 w-6 text-zinc-100 dark:text-zinc-900" />
                            <div className="mb-2 mt-4 text-lg font-bold text-zinc-100 dark:text-zinc-900">
                              Fancy Text
                            </div>
                            <p className="text-sm leading-tight text-zinc-400 dark:text-zinc-500">
                              Professional Unicode text converter for all social platforms.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem title="Symbol Picker" icon={<Search className="h-4 w-4" />} comingSoon t_soon={t("soon")} />
                      <ListItem title="Bio Generator" icon={<PenTool className="h-4 w-4" />} comingSoon t_soon={t("soon")} />
                      <ListItem title="Font Explorer" icon={<Type className="h-4 w-4" />} comingSoon t_soon={t("soon")} />
                    </ul>
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

          <div className="flex items-center gap-4">
            {/* Locale Switcher */}
            <Button variant="outline" size="icon" onClick={() => switchLocale(locale === "en" ? "vi" : "en")} >
              <span className="">{locale === "en" ? "EN" : "VI"}</span>
            </Button>

            <ModeToggle />
            <nav className="flex items-center gap-2">
              <Link href="/fancy-text" className={buttonVariants({ variant: "default", size: "lg" })}>
                {t("try_app")}
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  );
};

const ListItem = ({ title, icon, comingSoon, t_soon }: { title: string; icon: React.ReactNode; comingSoon?: boolean; t_soon: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          comingSoon ? "opacity-80 cursor-not-allowed" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
    </li>
  );
};
