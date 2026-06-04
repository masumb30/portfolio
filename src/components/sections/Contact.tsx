"use client";

import * as React from "react";
import emailjs from "@emailjs/browser";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Code, Briefcase, Users, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus("idle");

        // Important: Instruct user to replace these placeholders for EmailJS
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus("success");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setStatus("error");
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    const socialLinks = [
        { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:your.email@example.com" },
        { name: "GitHub", icon: <Code className="w-5 h-5" />, href: "https://github.com" },
        { name: "LinkedIn", icon: <Briefcase className="w-5 h-5" />, href: "https://linkedin.com" },
        { name: "Facebook", icon: <Users className="w-5 h-5" />, href: "https://facebook.com" },
    ];

    return (
        <Section id="contact" title="Get In Touch">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Side: Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Let&apos;s build something great together.</h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi,
                            I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors py-2 group w-fit"
                            >
                                <div className="p-3 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                    {link.icon}
                                </div>
                                <span className="font-medium text-lg">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form */}
                <Card className="p-6 md:p-8">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="user_name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                required
                                className="flex h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="text-sm font-medium leading-none">
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                required
                                className="flex h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>

                        {status === "success" && (
                            <div className="rounded-md bg-green-500/15 p-4 flex items-center gap-3 text-green-600 dark:text-green-400">
                                <CheckCircle className="w-5 h-5" />
                                <p className="text-sm font-medium">Message sent successfully!</p>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="rounded-md bg-red-500/15 p-4 flex items-center gap-3 text-red-600 dark:text-red-400">
                                <AlertCircle className="w-5 h-5" />
                                <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                            </div>
                        )}
                    </form>
                </Card>
            </div>
        </Section>
    );
}
