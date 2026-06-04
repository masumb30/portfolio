"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroCopy() {
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
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Left side — Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                    >
                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium"
                        >
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            Available for new opportunities
                        </motion.div>

                        {/* Heading & subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                                Hi, I&apos;m <span className="text-primary">Your Name</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                Full Stack Developer specializing in React, Next.js &amp; Node.js
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-[540px] text-base md:text-lg text-muted-foreground"
                        >
                            I build fast, scalable, and user-focused web applications using modern technologies.
                            Focused on clean architecture, performance, and real-world problem solving.
                        </motion.p>

                        {/* CTA Buttons */}
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
                    </motion.div>

                    {/* Right side — Profile Image (hidden on small screens) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden md:flex flex-shrink-0 items-center justify-center"
                    >
                        <div className="relative group">
                            {/* Decorative ring */}
                            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Image wrapper */}
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-border/50 shadow-2xl">
                                <Image
                                    src="/profile.png"
                                    alt="Profile photo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
