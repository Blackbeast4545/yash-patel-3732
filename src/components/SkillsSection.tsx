import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wrench, Lock, Wifi, Server } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Security Operations",
    skills: ["SOC Monitoring", "SIEM Analysis", "Incident Response", "Alert Triage", "Threat Detection"],
  },
  {
    icon: Wrench,
    title: "Security Tools",
    skills: ["ELK Stack", "Elasticsearch", "Logstash", "Kibana", "SIEM Platforms", "Log Monitoring Tools"],
  },
  {
    icon: Lock,
    title: "Cybersecurity Practices",
    skills: ["Log Analysis", "Security Event Investigation", "VAPT", "Phishing Detection"],
  },
  {
    icon: Wifi,
    title: "Network Security",
    skills: ["Firewall Configuration", "Network Segmentation", "Access Control", "Network Protocols"],
  },
  {
    icon: Server,
    title: "Infrastructure & Networking",
    skills: ["Wireless AP Deployment", "Switch Configuration", "Network Troubleshooting", "Enterprise Monitoring"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
