import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { title: "Fortinet NSE 1", subtitle: "Network Security Associate" },
  { title: "Fortinet NSE 2", subtitle: "Network Security Associate" },
  { title: "Ethical Hacking Essentials", subtitle: "EHE Certification" },
  { title: "Certified Fundamentals in Cybersecurity", subtitle: "Foundational Certification" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Certifications</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Professional Credentials
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-cyber-green/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-cyber-green" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
