import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const SKILLS_DATA = [
    {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express", "NestJS", "Python", "GraphQL", "REST APIs"]
    },
    {
        category: "Database",
        skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Supabase", "Firebase"]
    },
    {
        category: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "Jest"]
    }
];

export function Skills() {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS_DATA.map((group) => (
                    <Card key={group.category} className="p-6">
                        <h3 className="font-semibold text-lg mb-4 text-foreground border-b border-border pb-2">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors rounded-full text-sm font-medium border border-border"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
