import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, BarChart3, Network } from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Real-Time Network Traffic Analyzer",
    description: "Built a network traffic analysis tool for capturing, filtering, and visualizing live packet data to identify anomalies and suspicious activity in real time.",
    tech: ["Python", "Scapy", "Wireshark", "Network Protocols"],
  },
  {
    icon: BarChart3,
    title: "SOC Monitoring Dashboard",
    description: "Developed an interactive security monitoring dashboard that aggregates SIEM alerts, visualizes threat metrics, and streamlines incident response workflows.",
    tech: ["ELK Stack", "Kibana", "SIEM", "Log Analysis"],
  },
  {
    icon: Network,
    title: "Network Monitoring System",
    description: "Designed and deployed an enterprise network monitoring solution for tracking device health, bandwidth utilization, and connectivity status across infrastructure.",
    tech: ["Network Tools", "SNMP", "Monitoring", "Infrastructure"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col flex-1">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                >
                  <project.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.15 * i + 0.08 * j + 0.3 }}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
