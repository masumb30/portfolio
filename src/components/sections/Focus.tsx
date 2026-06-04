import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Zap, Layers, Layout, Lightbulb } from "lucide-react";

const focusAreas = [
    {
        title: "Performance Optimization",
        description: "Ensuring lightning-fast load times and smooth 60fps animations.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Scalable Architecture",
        description: "Designing systems that grow seamlessly with your user base.",
        icon: <Layers className="w-6 h-6" />
    },
    {
        title: "Clean UI/UX",
        description: "Crafting intuitive and engaging user experiences.",
        icon: <Layout className="w-6 h-6" />
    },
    {
        title: "Problem Solving",
        description: "Tackling complex technical challenges with elegant solutions.",
        icon: <Lightbulb className="w-6 h-6" />
    }
];

export function Focus() {
    return (
        <Section id="focus" title="What I Focus On">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {focusAreas.map((area, index) => (
                    <Card key={index} className="p-6 group flex flex-col items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                            {area.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
