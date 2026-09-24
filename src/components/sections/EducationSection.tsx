"use client";

import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold"
        >
          Education
        </motion.h2>

        <div className="relative ml-4 border-l-4 border-blue-600 md:ml-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-600" />

            <h3 className="text-2xl font-bold">
              Bachelor of Science in Computer Science &amp; Engineering
            </h3>

            <p className="mt-2 font-semibold text-blue-600">Metropolitan University</p>
            <p className="mt-2 text-gray-500">2023 - Present</p>
            <p className="mt-3 leading-7 text-gray-600">
              Focus areas include Artificial Intelligence, Machine Learning,
              Software Engineering, Database Systems and Computer Networks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative ml-8"
          >
            <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-600" />

            <h3 className="text-2xl font-bold">Higher Secondary Certificate</h3>
            <p className="mt-2 font-semibold text-blue-600">Murari Chand College</p>
            <p className="mt-3 leading-7 text-gray-600">
              Background : Science
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
