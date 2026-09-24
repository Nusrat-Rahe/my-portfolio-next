"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-teal-100 bg-teal-50/55 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold text-[#102a43]"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl leading-8 text-slate-600"
        >
          I am a Computer Science and Engineering student with a strong interest
          in Artificial Intelligence, Machine Learning and research. I am
          continuously improving my programming skills and exploring modern
          technologies to build useful and meaningful projects.
        </motion.p>
      </div>
    </section>
  );
}
