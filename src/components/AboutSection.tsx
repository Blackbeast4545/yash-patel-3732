import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Activity, Search, Network } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "SOC Operations", desc: "Real-time security monitoring & alert triage across enterprise environments" },
  { icon: Activity, title: "SIEM Analysis", desc: "ELK Stack & SIEM dashboard analysis with 300–500 events per shift" },
  { icon: Search, title: "Incident Investigation", desc: "Threat detection, log correlation, and incident response documentation" },
  { icon: Network, title: "Network Security", desc: "Firewall configuration, network segmentation & access control implementation" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cybersecurity professional with real-world SOC experience
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            With practical experience spanning SOC monitoring, SIEM analysis, and network security operations, 
            I specialize in monitoring security events, performing alert triage, and investigating threats 
            in enterprise environments. My work combines technical depth with operational discipline to 
            strengthen organizational security posture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
