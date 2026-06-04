export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    techStack: string[];
    github: string;
    live: string;
    featured: boolean;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AI SaaS Platform",
        description: "An advanced AI-driven SaaS platform for automated copywriting.",
        fullDescription: "This project involved building a full-stack SaaS platform utilizing modern LLMs to generate high-converting copy. Features include user authentication, subscription management with Stripe, and real-time generation via WebSockets.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Supabase"],
        github: "#",
        live: "#",
        featured: true,
        image: "/placeholder1.png"
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "A high-performance scalable admin dashboard for enterprise e-commerce.",
        fullDescription: "Built with performant rendering and global state management. It provides analytics, sales tracking, inventory management, and role-based access control.",
        techStack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Framer Motion"],
        github: "#",
        live: "#",
        featured: true,
        image: "/placeholder2.png"
    },
    {
        id: 3,
        title: "Developer Blogging Tool",
        description: "A markdown-based blogging platform optimized for developers.",
        fullDescription: "Minimalist blogging platform that parses markdown to static HTML. Includes MDX support, syntax highlighting, and an automated deployment pipeline.",
        techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
        github: "#",
        live: "#",
        featured: false,
        image: "/placeholder3.png"
    }
];
