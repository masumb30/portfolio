import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-2xl border border-border bg-background/60 backdrop-blur-xl text-foreground shadow-sm transition-all hover:border-primary/20 hover:shadow-md",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";
