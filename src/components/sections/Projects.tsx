"use client";

import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { projects, Project } from "@/data/projects";
import { ExternalLink, GitBranch } from "lucide-react";

export function Projects() {
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="flex flex-col overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Visual Placeholder for Project Image */}
                        <div className="h-48 bg-muted relative overflow-hidden flex items-center justify-center">
                            {/* In a real project you'd use next/image here */}
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors duration-500 z-10" />
                            <div className="text-muted-foreground opacity-50 font-mono text-sm tracking-widest z-0">
                                {project.title.toUpperCase()}
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <p className="text-muted-foreground mb-4 text-sm flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border w-full">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-medium">
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="flex flex-col">
                        <div className="h-48 sm:h-64 bg-muted relative w-full flex items-center justify-center">
                            <div className="text-muted-foreground opacity-50 font-mono text-xl tracking-widest">
                                {selectedProject.title.toUpperCase()}
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl font-bold">{selectedProject.title}</h2>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {selectedProject.fullDescription}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                                {selectedProject.live !== "#" && (
                                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button className="w-full gap-2">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </Button>
                                    </a>
                                )}
                                {selectedProject.github !== "#" && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button variant="outline" className="w-full gap-2">
                                            <GitBranch className="w-4 h-4" /> Source Code
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
}
