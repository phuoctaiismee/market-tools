import { FancyTextMain } from "@/features/fancy-text/fancy-text-main";

export const metadata = {
  title: "Fancy Text Tool | Market Tools",
  description: "Style your text with unique Unicode characters for social media.",
};

export default function FancyTextPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 space-y-8">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
            Fancy Text Decorator
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Transform your ordinary text into extraordinary styles suitable for any social platform.
          </p>
        </div>

        <FancyTextMain />
      </div>
    </div>
  );
}
