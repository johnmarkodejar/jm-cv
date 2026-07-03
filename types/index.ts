export interface Skill {
  name: string;
  level?: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  gallery?: GalleryImage[];
}

export interface Experience {
  title: string;
  company?: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}
