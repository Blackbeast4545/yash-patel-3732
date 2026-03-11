import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Network Security Engineer",
    company: "Vinay Enterprises",
    location: "Ahmedabad, India",
    period: "Nov 2025 – Present",
    highlights: [
      "Configured and monitored enterprise firewall policies and network security controls",
      "Implemented 10+ firewall and access control rules under senior supervision",
      "Deployed and configured 20+ enterprise wireless access points",
      "Configured 5 managed network switches and maintained security documentation",
      "Performed network troubleshooting and connectivity diagnostics",
    ],
  },
  {
    title: "SOC Analyst Intern",
    company: "Cyber Talos",
    location: "Ahmedabad, India",
    period: "Dec 2024 – May 2025",
    highlights: [
      "Monitored 300–500 security events per shift using SIEM and ELK dashboards",
      "Investigated 10–15 security alerts daily and escalated suspicious activities",
      "Analyzed firewall, authentication, and endpoint logs to detect anomalies",
      "Assisted in alert triage, incident documentation, and SOC operational processes",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Infopercept Consulting Pvt. Ltd",
    location: "India",
    period: "Jul 2024 – Aug 2024",
    highlights: [
      "Participated in Vulnerability Assessment and Penetration Testing (VAPT)",
      "Identified 20+ vulnerabilities including weak passwords and misconfigurations",
      "Assisted in preparing remediation reports for IT and development teams",
      "Supported security alert analysis and incident response processes",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Tech Defense Pvt. Ltd",
    location: "India",
    period: "Jul 2023 – Aug 2023",
    highlights: [
      "Monitored ELK dashboards to analyze network and system logs",
      "Investigated alerts related to failed login attempts and abnormal traffic",
      "Documented findings and contributed to internal security reports",
      "Developed foundational knowledge of SOC monitoring and log analysis",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Professional Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="relative pl-12"
              >
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 * i + 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-[12px] top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-background"
                />

                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">{exp.title}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 * i + 0.05 * j + 0.3 }}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
