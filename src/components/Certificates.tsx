import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import c1 from "@/assets/cert-1.png";
//import c2 from "@/assets/cert-2.jpg";
//import c3 from "@/assets/cert-3.jpg";

const certs = [
  { img: c1, title: "Google IT Support • Google - Coursera • January 4, 2026" },
  //{ img: c2, title: "Full Stack Certification" },
  //{ img: c3, title: "UI/UX Design Fundamentals" },
  //{ img: c1, title: "Python for Developers" },
  //{ img: c2, title: "Git & GitHub Essentials" },
];

export const Certificates = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="certs" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Certificates" subtitle="Achievements" />
      </div>
      <div className="scrollbar-hide -mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
        {certs.map((c, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            onClick={() => setActive(c.img)}
            className="glass group relative aspect-[4/3] w-[85vw] shrink-0 snap-center overflow-hidden rounded-3xl md:w-[420px]"
          >
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 text-left">
              <p className="text-sm font-semibold">{c.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-6 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active}
              alt="Certificate"
              className="max-h-[90vh] max-w-6xl rounded-2xl object-contain neon-border"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 glass flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
