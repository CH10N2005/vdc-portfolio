import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 shadow-lg">
        <a href="#home" className="mx-2 text-xs font-bold tracking-widest">
          <span className="neon-text">VD</span>C
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-1">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
