"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Focus", href: "#focus" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = React.useState("home");
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy logic
            const sections = NAV_LINKS.map((link) => document.querySelector(link.href));
            let currentActive = activeSection;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i] as HTMLElement | null;
                if (section) {
                    if (window.scrollY >= section.offsetTop - 150) {
                        currentActive = NAV_LINKS[i].href.slice(1);
                        break;
                    }
                }
            }
            if (currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="font-bold text-xl tracking-tight flex items-center gap-2 group"
                    aria-label="Home"
                >
                    <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
                        <span className="font-mono font-bold text-lg leading-none">DN</span>
                    </div>
                    <span className="hidden sm:inline-block">Portfolio</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                                activeSection === link.href.slice(1)
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.slice(1) && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                            )}
                        </a>
                    ))}
                    <div className="w-px h-5 bg-border mx-2" />
                    <ThemeToggle />
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-xl shadow-lg p-4 flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                handleNavClick(e, link.href);
                                setMobileMenuOpen(false);
                            }}
                            className={cn(
                                "text-base font-medium p-3 rounded-lg transition-colors",
                                activeSection === link.href.slice(1)
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
