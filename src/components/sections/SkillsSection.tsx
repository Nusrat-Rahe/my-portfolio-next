"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-center font-semibold text-slate-100 shadow-sm shadow-slate-950/30 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-slate-800/80 hover:shadow-md hover:shadow-sky-500/10"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
