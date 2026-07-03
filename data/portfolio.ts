import type { SkillCategory, Service, Project, Experience, Metric } from "@/types";

export const personal = {
  name: "John Mark O. Reyes",
  preferredName: "JM Reyes",
  title: "Senior Full-Stack Engineer | Solutions Architect | DevOps Engineer | AI Automation Consultant",
  location: "Philippines",
  email: "johnmarkodejar@gmail.com",
  since: 2007,
};

export const metrics: Metric[] = [
  { value: "15", label: "Years Experience", suffix: "+" },
  { value: "End-to-End", label: "Delivery Model" },
  { value: "Cloud Native", label: "Architecture" },
  { value: "AI-Powered", label: "Automation Stack" },
  { value: "Global", label: "Client Reach" },
];

export const techStack = [
  "PHP", "AWS", "Kubernetes", "Docker", "Terraform",
  "Next.js", "React", "Node.js", "AI Agents", "n8n",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "PHP", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: ".NET", level: "Intermediate" },
      { name: "REST APIs", level: "Expert" },
      { name: "MVC", level: "Expert" },
      { name: "OOP", level: "Expert" },
      { name: "Automation", level: "Advanced" },
    ],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Vue 2", level: "Advanced" },
      { name: "Vue 3", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "TailwindCSS", level: "Advanced" },
    ],
  },
  {
    title: "AI & Automation",
    icon: "Bot",
    skills: [
      { name: "ChatGPT", level: "Expert" },
      { name: "Claude", level: "Expert" },
      { name: "Gemini", level: "Advanced" },
      { name: "MCP", level: "Advanced" },
      { name: "n8n", level: "Expert" },
      { name: "Botpress", level: "Advanced" },
      { name: "Zapier", level: "Advanced" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS EC2 / EKS", level: "Advanced" },
      { name: "Lambda / S3", level: "Advanced" },
      { name: "RDS / Cognito / WAF", level: "Advanced" },
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Terraform", level: "Advanced" },
      { name: "Linux", level: "Expert" },
      { name: "CI/CD Pipelines", level: "Expert" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Oracle", level: "Intermediate" },
      { name: "Redis", level: "Advanced" },
      { name: "Memcache", level: "Advanced" },
      { name: "InfluxDB", level: "Intermediate" },
      { name: "Sphinx", level: "Intermediate" },
    ],
  },
  {
    title: "Monitoring & Analytics",
    icon: "BarChart2",
    skills: [
      { name: "Grafana", level: "Advanced" },
      { name: "New Relic", level: "Advanced" },
      { name: "LogicMonitor", level: "Intermediate" },
      { name: "Amplitude", level: "Advanced" },
      { name: "Google Analytics", level: "Expert" },
    ],
  },
  {
    title: "CMS & eCommerce",
    icon: "ShoppingCart",
    skills: [
      { name: "WordPress", level: "Expert" },
      { name: "Joomla", level: "Advanced" },
      { name: "Shopify", level: "Advanced" },
      { name: "Magento", level: "Advanced" },
      { name: "CS-Cart", level: "Advanced" },
      { name: "Volusion", level: "Intermediate" },
    ],
  },
  {
    title: "CRM & Marketing",
    icon: "Users",
    skills: [
      { name: "Pipedrive", level: "Advanced" },
      { name: "Infusionsoft", level: "Advanced" },
      { name: "FunnelFlux", level: "Advanced" },
      { name: "Twilio", level: "Advanced" },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks, scalable architecture, and clean code.",
    icon: "Code2",
    technologies: ["PHP", "Node.js", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Solutions Architecture",
    description: "Designing robust, scalable system architectures tailored to business requirements and growth targets.",
    icon: "GitBranch",
    technologies: ["AWS", "Microservices", "API Design", "System Design"],
  },
  {
    title: "DevOps Engineering",
    description: "Automating deployments, managing CI/CD pipelines, and building reliable delivery infrastructure.",
    icon: "Repeat2",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    title: "Cloud Infrastructure",
    description: "Building and managing secure, cost-optimized cloud environments on AWS.",
    icon: "Cloud",
    technologies: ["AWS", "EC2", "EKS", "Lambda", "RDS", "S3"],
  },
  {
    title: "AI Automation",
    description: "Creating intelligent workflows that automate business processes using LLMs and automation platforms.",
    icon: "Bot",
    technologies: ["n8n", "OpenAI", "Claude", "Botpress", "Zapier"],
  },
  {
    title: "CRM Integration",
    description: "Connecting CRM systems to your sales funnel, marketing tools, and product data.",
    icon: "Users",
    technologies: ["Pipedrive", "Infusionsoft", "REST APIs", "Webhooks"],
  },
  {
    title: "Marketing Technology",
    description: "Implementing tracking, analytics, and funnel optimization systems that drive measurable revenue.",
    icon: "TrendingUp",
    technologies: ["Amplitude", "GA4", "FunnelFlux", "Twilio"],
  },
  {
    title: "Technical Consulting",
    description: "Strategic technology guidance for startups and enterprises — from architecture reviews to roadmaps.",
    icon: "Lightbulb",
    technologies: ["Architecture Review", "Tech Audit", "Roadmapping"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Sr. Web Developer",
    company: "Satellite Office",
    period: "Oct 2022 – Present",
    description: "Senior developer embedded in an enterprise product team, modernizing legacy systems and building AI-powered solutions for telecommunications clients.",
    highlights: [
      "Involved in agile ceremonies including sprint planning, standups, and retrospectives",
      "Converting a legacy portal system to a microservices architecture using .NET, Next.js, AWS, and DevOps practices",
      "Built an ETL pipeline extracting usage, packet, and latency data from various APIs, transforming and loading into Grafana and other monitoring tools",
      "Implemented AI automation workflows, chatbot, and API to recommend suitable plans to customers based on their usage patterns",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Prosource Business Solutions Inc.",
    period: "Dec 2021 – Sep 2022",
    description: "Full-stack developer embedded in product teams, owning features from scoping through deployment on enterprise business software.",
    highlights: [
      "Participate in feature scoping, estimation, and scrum ceremonies",
      "Implement backend features using PHP with Laravel and frontend with Vue.js to meet business requirements",
      "Troubleshoot and deliver fixes on bugs and product adjustments",
      "Conduct demonstrations for product owners and stakeholders",
      "Involved in code review and the deployment process",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "ZZ Connect",
    period: "Sept 2020 – Dec 2021",
    description: "Part of the e-commerce engineering team, working across multiple platforms to build and customize storefronts and payment integrations.",
    highlights: [
      "Customized themes and built apps/plugins for WooCommerce, Shopify, and Magento",
      "Implemented company's payment gateway across multiple e-commerce platforms",
      "Delivered platform-specific feature enhancements aligned with client requirements",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Emapta Offshoring",
    period: "Jan 2020 – Sep 2020",
    description: "Member of a browser development team building a Chromium-based browser and its associated ecosystem of extensions and conferencing tools.",
    highlights: [
      "Collaborated on building features for a Chromium-based browser including pre-built extensions",
      "Contributed to the huddle.live video conferencing feature",
      "Built and managed browser extensions, software applications, and websites using Laravel and Codeigniter with Agile methodology",
      "Collaborated with digital marketing tooling to implement lead generation pipelines into CRM software",
      "Created technical documentation of products for future developer onboarding",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Zigzag Media Inc.",
    period: "Jan 2016 – Jan 2020",
    description: "Senior engineer at a digital media company — led studio product development, built browser extensions and campaign tooling, and mentored junior developers.",
    highlights: [
      "Lead developer of the studio product that reached commercial viability",
      "Built browser extensions, software applications, and marketing websites using Laravel and Codeigniter",
      "Collaborated on MVP delivery, campaign landers, offer pages, and marketing brainstorming",
      "Implemented analytics required by Product Owners and Business Managers",
      "Aligned tasks with junior developers and coordinated with creative and QA teams",
      "Created technical documentation for future developer onboarding",
      "Received the Improvement and Speed company core value awards",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Freelance / Homebased",
    period: "Oct 2010 – Jan 2016",
    description: "Independent contractor delivering custom web applications for overseas clients across a wide range of industries and platforms.",
    highlights: [
      "Built diverse applications to client specifications for international clients",
      "Worked across CMS, CRM, payment gateways, SEO, marketing tools, and API integrations",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise eCommerce Platform",
    description: "Multi-vendor eCommerce platform handling 10,000+ daily transactions with real-time inventory management, multi-currency support, and automated fulfillment workflows.",
    category: "eCommerce",
    technologies: ["PHP", "React", "MySQL", "Redis", "AWS EKS", "Docker"],
    impact: "Increased client revenue by 40% within 6 months of launch",
  },
  {
    title: "Cloud-Native SaaS Infrastructure",
    description: "Designed and deployed a fully containerized SaaS platform on AWS EKS with auto-scaling, observability, and zero-downtime deployments.",
    category: "DevOps",
    technologies: ["Kubernetes", "Terraform", "AWS", "Grafana", "GitHub Actions"],
    impact: "Reduced infrastructure costs by 35% and deployment time from 45 min to 4 min",
  },
  {
    title: "AI Lead Qualification System",
    description: "End-to-end AI automation workflow that qualifies inbound leads using Claude, routes them to CRM, triggers personalized email sequences, and alerts sales teams.",
    category: "AI Automation",
    technologies: ["n8n", "Claude", "Pipedrive", "Twilio", "Node.js"],
    impact: "Automated 80% of lead qualification, saving 20+ hours/week per sales rep",
  },
  {
    title: "Marketing Analytics Platform",
    description: "Custom attribution and funnel analytics platform integrating Google Analytics, Amplitude, and FunnelFlux to track user journeys from ad click to conversion.",
    category: "Marketing Technology",
    technologies: ["Next.js", "Amplitude", "GA4", "FunnelFlux", "PostgreSQL"],
    impact: "Improved marketing ROI visibility, enabling a 25% reduction in CAC",
  },
  {
    title: "CRM & Sales Automation Hub",
    description: "Unified CRM integration layer connecting Infusionsoft to custom web applications, automating contact segmentation, follow-up sequences, and deal pipeline updates.",
    category: "CRM",
    technologies: ["Infusionsoft", "Zapier", "Node.js", "Webhooks", "REST APIs"],
    impact: "Reduced manual CRM data entry by 90% across a 30-person sales team",
  },
  {
    title: "Enterprise Content Management System",
    description: "Headless CMS powering a network of 15 regional websites with centralized content management, automated SEO optimization, and multi-language support.",
    category: "Enterprise Application",
    technologies: ["Next.js", "WordPress (Headless)", "TypeScript", "AWS", "Redis"],
    impact: "Consolidated 15 codebases into one platform, cutting maintenance cost by 60%",
  },
  {
    title: "HOAS — HOA Management Platform",
    description: "Full-featured platform for Philippine homeowners associations covering billing, double-entry accounting, financial reporting, gate access, amenity booking, elections, and a self-service homeowner portal — built for RA 9904 and Data Privacy Act compliance.",
    category: "Enterprise Application",
    technologies: [".NET", "Next.js", "PostgreSQL", "Redis", "Docker", "Clean Architecture"],
    impact: "Replaces spreadsheets and manual processes with an auditable, role-based system across 9 core modules",
  },
];
