import { SparkleIcon } from "lucide-react";

interface SlugPreviewCardProps {
    title: string;
    description: string;
    url: string;
}

export const SlugPreviewCard = ({
    title,
    description,
    url,
}: SlugPreviewCardProps) => {
    return (
        <div className="rounded-xl bg-accent p-6 shadow-sm backdrop-blur-xl transition-all duration-200 ">
            <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                    <SparkleIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="">
                     <p className="text-sm font-medium text-foreground">
                        Market Tools
                    </p>
                    <p className="text-xs text-green-800 dark:text-green-600">
                        {url}
                    </p>
                </div>
            </div>
            <h2 className="mt-1.5 text-xl font-medium text-blue-400 transition-colors hover:text-sky-900 dark:text-blue-300 dark:hover:text-sky-100">
                {title}
            </h2>
            <p className="mt-1 text-sm leading-7 text-muted-foreground">
                {description}
            </p>
        </div>
    );
};