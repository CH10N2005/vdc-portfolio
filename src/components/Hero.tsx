import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Send } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { MagneticButton } from "./MagneticButton";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/urbffleo/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/urbbfleo/", label: "Instagram" },
  { icon: Github, href: "https://github.com/CH10N2005", label: "GitHub" },
  { icon: Send, href: "https://t.me/leodpbbfpremium/", label: "Telegram" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          <div className="squircle animate-breathe overflow-hidden p-1">
            <img
              src={profile}
              alt="Vin Diesel P. Chiong"
              width={180}
              height={180}
              className="squircle h-40 w-40 object-cover md:h-48 md:w-48"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group mb-3 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="inline-block transition-all duration-500 group-hover:text-stroke">
            Vin Diesel
          </span>{" "}
          <span className="inline-block transition-all duration-500 group-hover:text-stroke">
            P. Chiong
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="neon-text mb-6 text-sm font-semibold tracking-[0.3em] md:text-base"
        >
          BS INFORMATION SYSTEMS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground md:text-base"
        >
          <span>Aspiring Fullstack Developer</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>Graphic Designer</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>Freelancer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex items-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass group flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-primary hover:shadow-[0_0_20px_hsl(var(--neon)/0.5)]"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
