import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-cyber-purple/10 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6"
        >
          Securing Digital Infrastructure{" "}
          <span className="text-gradient-cyber">Through Intelligent</span>{" "}
          Threat Monitoring
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          SOC Analyst & Network Security Engineer with hands-on experience in SIEM analysis, threat detection, incident response, and enterprise network security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-button"
          >
            View Experience
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/Yash_Patel_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium text-sm card-hover"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium text-sm card-hover"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
