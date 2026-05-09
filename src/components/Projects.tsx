import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
//import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, title: "Code Master", desc: "An interactive programming quiz game with 30 questions, leaderboard system, and retro pixel art design.", href: "https://github.com/CH10N2005/Code-master" },
  { img: p2, title: "BuildIt Pro", desc: "a vibe-coded web-based construction project management system that helps contractors and managers streamline project tracking through a clean and intuitive interface. It allows users to create and organize construction projects by capturing essential details such as project name, location, client, and budget — all designed for real-world field use.", href: "#" },
  { img: p3, title: "Student Record System", desc: "A web-based Student Record System built with PHP and MySQL that allows administrators to efficiently manage student information through a clean and secure interface. It enables users to perform full CRUD operations — adding, viewing, editing, and deleting student records — with features like search and filter, dashboard analytics, and session-based authentication designed for real-world academic use..", href: "#" },
  //{ img: p4, title: "Python Automation", desc: "Scripts and tools that automate repetitive academic and work tasks.", href: "#" },
];

export const Projects = () => (
  <section id="projects" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader title="Projects" subtitle="What I've Built" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass group relative block aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.35]"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background via-background/95 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="mb-2 text-2xl font-bold">{p.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View on GitHub <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="absolute left-5 top-5 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-wider opacity-100 transition-opacity group-hover:opacity-0">
              0{i + 1}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
