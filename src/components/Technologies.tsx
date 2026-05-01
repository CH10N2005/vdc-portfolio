import { motion } from "framer-motion";
import { Code2, Database, Palette, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    icon: Code2,
    title: "Front End",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    span: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Back End",
    items: ["Python", "Java", "PHP"],
    span: "md:col-span-1",
  },
  {
    icon: Palette,
    title: "Design Tools",
    items: ["Canva", "Figma"],
    span: "md:col-span-1",
  },
  {
    icon: Wrench,
    title: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
    span: "md:col-span-1",
  },
];

export const Technologies = () => (
  <section id="tech" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader title="Technologies" subtitle="Explore" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--neon)/0.15)] ${g.span}`}
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20" />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
