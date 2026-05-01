import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="relative flex h-8 w-14 items-center rounded-full glass transition-all hover:scale-105"
    >
      <span
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 ease-out ${
          isDark ? "translate-x-1" : "translate-x-7"
        }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
};
