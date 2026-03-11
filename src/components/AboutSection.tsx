import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, Activity, Search, Network } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "SOC Operations", desc: "Real-time security monitoring & alert triage across enterprise environments" },
  { icon: Activity, title: "SIEM Analysis", desc: "ELK Stack & SIEM dashboard analysis with 300–500 events per shift" },
  { icon: Search, title: "Incident Investigation", desc: "Threat detection, log correlation, and incident response documentation" },
  { icon: Network, title: "Network Security", desc: "Firewall configuration, network segmentation & access control implementation" },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Monitored/Shift" },
  { value: 20, suffix: "+", label: "Vulnerabilities Found" },
  { value: 10, suffix: "+", label: "Firewall Rules Deployed" },
  { value: 4, suffix: "", label: "Certifications" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-3xl md:text-4xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cybersecurity professional with real-world SOC experience
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            With practical experience spanning SOC monitoring, SIEM analysis, and network security operations,
            I specialize in monitoring security events, performing alert triage, and investigating threats
            in enterprise environments.
          </p>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-card border border-border group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
