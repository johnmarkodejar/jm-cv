import { personal } from "@/data/portfolio";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${personal.email}`} className="text-xs text-muted-foreground hover:text-white transition-colors">
            Email
          </a>
          <a href="/api/resume" download className="text-xs text-muted-foreground hover:text-white transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
