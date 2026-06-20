"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    text: "My passion for software development started back in college, where I built desktop applications using Visual Basic 6.0. Even as a student, I took on projects for local clients, developing systems such as inventory management, library management, and other business applications. Around the same time, I began exploring web development through the LAMP stack, which opened the door to an entirely new world of possibilities.",
    highlight: false,
  },
  {
    text: "After graduating, I landed my first professional role as a Junior Web Developer at a forex trading company in Makati. It was an exciting time in the industry — Web 2.0 was rapidly evolving, and we were transitioning websites from table-based layouts to modern, table-less designs. Responsive web development was still in its early stages and often challenging to implement. During those years, I worked extensively with CodeIgniter and even developed websites using Flash ActionScript 3.0 — because back then, Flash-powered websites were considered cutting-edge and visually impressive.",
    highlight: false,
  },
  {
    text: "As my career progressed, I expanded into remote and freelance development, working with clients from different countries and industries. This experience exposed me to a wide range of technologies, tools, and development practices. One thing I learned about myself during this period was adaptability. Whether it was a new framework, programming language, or project requirement, I enjoyed learning and finding ways to deliver solutions.",
    highlight: false,
  },
  {
    text: "In 2016, I decided to return to a corporate environment. Beyond job security and benefits, I wanted the opportunity to collaborate with larger teams, learn from experienced professionals, share knowledge, and continue growing both personally and professionally. Of course, it also meant adjusting to daily commutes, traffic, and the never-ending search for parking spaces. Over the years, I've seen people come and go — through redundancies, resignations, and everything in between. It brought me to a realization: skills and talent alone don't make a great developer. Character matters just as much. How someone handles pressure, collaborates with a team, or responds to failure says a lot about who they really are. You might wonder how you'd ever know that before hiring someone. Sometimes, a good interview gives you a glimpse. And when you know, you know.",
    highlight: false,
  },
  {
    text: "Then came the pandemic. Like many businesses, my company was heavily affected and eventually shut down, resulting in workforce redundancies. Fortunately, I was able to secure a new role shortly afterward. Looking back, I feel grateful that since graduating, I have never experienced a long period of unemployment. Every challenge became an opportunity to learn, adapt, and move forward.",
    highlight: false,
  },
  {
    text: "For years, I've wanted to build my own personal website, but somehow it always ended up at the bottom of my priority list. Then the world changed again.",
    highlight: false,
  },
  {
    text: "Today, AI is transforming the software industry at an incredible pace. New tools can generate websites, automate workflows, and accelerate development in ways that seemed impossible just a few years ago. I remember my boss asking me years ago whether I was worried about the rise of AI. My answer at the time was simple: \"Not really.\" AI wasn't very reliable, often made mistakes, and still had significant limitations.",
    highlight: false,
  },
  {
    text: "If you asked me the same question today, my answer would be different.",
    highlight: true,
  },
  {
    text: "AI is not scary because it will replace developers. It's scary because developers who refuse to learn and adapt may eventually find themselves left behind. Like every major technological shift before it, AI is becoming another tool that developers need to understand and embrace.",
    highlight: false,
  },
  {
    text: "Fortunately, my current role has given me the opportunity to work closely with AI technologies. I've been involved in integrating AI into systems, building workflows, connecting APIs, setting up MCP servers, designing prompts, developing AI-powered chat agents, and exploring how these technologies can improve productivity and user experiences. With every advancement, AI becomes more capable, more accessible, and more useful.",
    highlight: false,
  },
  {
    text: "And that brings us here. Yes, this website was brought to life with the help of AI — but the journey, experiences, lessons, and passion behind it are entirely my own.",
    highlight: true,
  },
];

export default function Story() {
  return (
    <section className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-10"
        >
          Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-10"
        >
          My Journey as a Developer
        </motion.h2>

        <div className="flex flex-col gap-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className={`leading-relaxed text-sm ${
                p.highlight
                  ? "text-white font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {p.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
