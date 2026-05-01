import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export const About = () => (
  <section id="about" className="px-6 py-24">
    <div className="mx-auto max-w-3xl">
      <SectionHeader title="About Me" subtitle="Who I Am" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
      >
        Hi, I'm an aspiring{" "}
        <span className="font-bold neon-text">full stack</span> developer,
        graphic designer, and{" "}
        <span className="font-bold neon-text">freelancer</span>. I offer help
        with web development, coding assignments, school projects, and{" "}
        <span className="font-bold neon-text">Canva</span> graphic designs. I
        work with HTML, CSS, JavaScript, Python, and Java. Always learning,
        always building.
      </motion.p>
    </div>
  </section>
);
