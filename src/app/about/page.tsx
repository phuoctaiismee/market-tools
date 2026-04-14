import { Shield, Sparkles, Zap, Heart } from "lucide-react";

export const metadata = {
  title: "About Us | Market Tools",
  description: "Learn about Market Tools, our mission, and our commitment to privacy.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 space-y-24">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
             Building Tools for the <br /> 
             <span className="text-zinc-400">Modern Creator.</span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            Market Tools was born from a simple idea: professional utilities for content creators 
            should be fast, free, and completely private.
          </p>
        </section>

        {/* Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-violet-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Shield className="h-6 w-6 text-violet-500" />
            </div>
            <h3 className="text-2xl font-bold">Privacy First</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We don&apos;t use cookies. We don&apos;t track your data. All transformations happen 
              directly on your device. Your creativity is your business, not ours.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Zap className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold">Native Performance</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Built with Next.js and optimized for speed. No bloat, no heavy libraries, 
              just the performance you need to get things done.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-rose-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Sparkles className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold">Unicode Standards</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We leverage universal Unicode characters to ensure your text looks perfect on 
              every social platform, from Instagram to Twitter.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
               <Heart className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold">Free Forever</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Market Tools is a passion project. No subscriptions, no ads, no paywalls. 
              Our mission is to empower creators everywhere.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-2xl mx-auto space-y-8 py-12">
           <h2 className="text-3xl font-bold">The Story</h2>
           <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <p>
                In an era where every utility requires an account or bombards you with ads, 
                we wanted to create something different. Market Tools is designed to be a 
                utilitarian haven—a place where you can quickly transform your text, pick 
                symbols, and optimize your presence without friction.
              </p>
              <p>
                Every line of code is written with simplicity and standard web practices 
                in mind. We use the latest technologies like Shadcn/ui and Tailwind CSS 
                to maintain a clean, aesthetic, and accessible environment.
              </p>
           </div>
        </section>
      </div>
    </div>
  );
}
