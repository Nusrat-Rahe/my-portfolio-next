"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/portfolio";

const colorClasses = {
  blue: "bg-sky-500/10 text-sky-200",
  purple: "bg-violet-500/10 text-violet-200",
  green: "bg-emerald-500/10 text-emerald-200",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30"
            >
              <div
                className={`mb-5 flex h-40 items-center justify-center rounded-xl border border-slate-700/70 ${colorClasses[project.color]}`}
              >
                <span className="text-xl font-bold">{project.category}</span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-5 text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-sm text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
