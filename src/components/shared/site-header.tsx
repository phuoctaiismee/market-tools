"use client";

import React from "react";
import Link from "next/link";
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

export const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-10 px-4">Tools</NavigationMenuTrigger>
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
                    <ListItem title="Symbol Picker" icon={<Search className="h-4 w-4" />} comingSoon />
                    <ListItem title="Bio Generator" icon={<PenTool className="h-4 w-4" />} comingSoon />
                    <ListItem title="Font Explorer" icon={<Type className="h-4 w-4" />} comingSoon />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#about" className={cn(navigationMenuTriggerStyle(), "bg-transparent h-10 px-4")}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <nav className="flex items-center gap-2">
            <Link href="/fancy-text" className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-bold px-5 py-2 rounded-xl transition-all hover:opacity-90 shadow-lg shadow-zinc-900/10 dark:shadow-none">
              Try App
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ title, icon, comingSoon }: { title: string; icon: React.ReactNode; comingSoon?: boolean }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          comingSoon ? "opacity-50 cursor-not-allowed" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">{icon}</span>
            <div className="text-sm font-bold leading-none">{title}</div>
            {comingSoon && (
              <Badge variant="secondary" className="text-[10px] h-4 px-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border-none uppercase">Soon</Badge>
            )}
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
};
