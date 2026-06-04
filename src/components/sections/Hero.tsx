"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const handleNavClick = (href: string) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient/Grid effect */}
            <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Glowing Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse pointer-events-none" />

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
                        <span className="flex h-2 w-2 rounded-full bg-primary absolute mr-2" />
                        Available for new opportunities
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                            Hi, I&apos;m <span className="text-primary">Your Name</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto font-medium">
                            Full Stack Developer specializing in React, Next.js & Node.js
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[700px] text-base md:text-lg text-muted-foreground mx-auto"
                    >
                        I build fast, scalable, and user-focused web applications using modern technologies.
                        Focused on clean architecture, performance, and real-world problem solving.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button size="lg" onClick={() => handleNavClick("#projects")} className="w-full sm:w-auto">
                            View Projects
                        </Button>
                        <Button size="lg" variant="secondary" onClick={() => handleNavClick("#contact")} className="w-full sm:w-auto">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
