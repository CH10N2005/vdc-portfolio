import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { SectionHeader } from "./SectionHeader";
import { MagneticButton } from "./MagneticButton";
import { useToast } from "@/hooks/use-toast";

const Field = ({ label, type = "text", as = "input", value, onChange, name }: any) => {
  const Tag: any = as;
  return (
    <label className="group block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
        {label}
      </span>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={as === "textarea" ? 4 : undefined}
        className="w-full border-0 border-b border-border bg-transparent pb-3 text-base outline-none transition-all focus:border-primary focus:shadow-[0_1px_0_0_hsl(var(--neon)),0_10px_30px_-10px_hsl(var(--neon)/0.5)]"
      />
    </label>
  );
};

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/chiongvindiesel269@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json" 
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Message from Portfolio",
          _captcha: "false",
        }),
      });
      toast({ title: "Message sent!", description: "Thanks, I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error!", description: "Something went wrong. Try again." });
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeader title="Get In Touch" subtitle="Let's Work Together" />
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass space-y-7 rounded-3xl p-8 md:p-10"
        >
          <Field label="Your Name" name="name" value={form.name} onChange={onChange} />
          <Field label="Email Address" type="email" name="email" value={form.email} onChange={onChange} />
          <Field label="Message" as="textarea" name="message" value={form.message} onChange={onChange} />
          <div className="flex justify-center pt-2">
            <MagneticButton>
              <button
                type="submit"
                className="liquid-btn rounded-full border border-primary px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary"
              >
                Send Message
              </button>
            </MagneticButton>
          </div>
        </motion.form>
      </div>

    </section>
  );
};
