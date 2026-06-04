export function Footer() {
    return (
        <footer className="py-8 text-center text-muted-foreground border-t border-border mt-20 text-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                <p>Built with Next.js, Framer Motion & Tailwind CSS</p>
            </div>
        </footer>
    );
}
