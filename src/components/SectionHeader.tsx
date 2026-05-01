import { motion } from "framer-motion";

export const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col items-center text-center"
  >
    <span className="neon-text mb-3 text-xs font-semibold uppercase tracking-[0.4em]">
      {subtitle}
    </span>
    <h2 className="text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
      {title}
    </h2>
  </motion.div>
);
