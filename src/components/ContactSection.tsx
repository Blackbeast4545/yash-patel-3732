import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            I'm actively seeking SOC Analyst and Security Operations roles. If you're looking for a dedicated cybersecurity professional, let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:yahp0483@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-button"
          >
            <Mail className="w-4 h-4" />
            yahp0483@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/yash-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm card-hover"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          Ahmedabad, India
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
