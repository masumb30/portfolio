"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
    title?: string;
}

export function Section({ id, children, className, title }: SectionProps) {
    return (
        <section id={id} className={cn("py-24 md:py-32", className)}>
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{title}</h2>
                        <div className="mt-4 h-1 w-12 bg-primary rounded-full transition-all" />
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
