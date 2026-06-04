import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function About() {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I am a passionate software engineer with a strong foundation in modern web development.
                        I enjoy transforming complex problems into simple, beautiful, and intuitive interfaces.
                        My journey in tech has been driven by a relentless curiosity and a desire to build products that make a real difference.
                    </p>
                    <p>
                        Over the years, I&apos;ve honed my skills in the full frontend and backend stack,
                        working closely with incredible teams to deliver high-quality scalable applications.
                    </p>
                    <p className="font-medium text-foreground italic border-l-4 border-primary pl-4">
                        "Currently exploring cloud technologies and system design."
                    </p>
                </div>

                {/* Decorative / Summary Column */}
                <div className="relative">
                    <Card className="p-8 border-primary/20 bg-background/50 backdrop-blur-xl relative z-10">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-xl text-foreground mb-2">Fast & reliable</h3>
                                <p className="text-muted-foreground">Emphasizing runtime performance and efficient assets delivery.</p>
                            </div>
                            <div className="h-px bg-border w-full" />
                            <div>
                                <h3 className="font-semibold text-xl text-foreground mb-2">Clean architecture</h3>
                                <p className="text-muted-foreground">Writing modular, testable, and maintainable code.</p>
                            </div>
                        </div>
                    </Card>
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl -z-10 translate-x-4 translate-y-4" />
                </div>
            </div>
        </Section>
    );
}
