"use client";

import { motion } from "framer-motion";

const layers = [
  { title: "Cloud Provider", items: ["AWS EC2", "AWS EKS", "AWS Lambda", "AWS S3 / RDS"] },
  { title: "Containers", items: ["Docker", "Kubernetes", "ECR"] },
  { title: "Infrastructure as Code", items: ["Terraform", "Ansible"] },
  { title: "CI/CD", items: ["GitHub Actions", "Jenkins", "Zero-downtime deploys"] },
  { title: "Monitoring", items: ["Grafana", "New Relic", "LogicMonitor", "Custom alerting"] },
  { title: "Security", items: ["AWS WAF", "Cognito", "VPC / Security Groups", "SSL/TLS"] },
];

export default function DevOps() {
  return (
    <section id="devops" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          DevOps & Cloud
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-4"
        >
          Cloud infrastructure & DevOps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl"
        >
          I build and maintain CI/CD pipelines, deployment automation, infrastructure-as-code,
          monitoring systems, and cloud-native architectures on AWS.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                {layer.title}
              </p>
              <div className="flex flex-col gap-1.5">
                {layer.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                    <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
