"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MySQL",
  "Machine Learning",
  "Artificial Intelligence",
  "Git & GitHub",
  "HTML & CSS",
];

const projects = [
  {
    title: "Heart Disease Prediction",
    category: "AI / ML",
    description:
      "A machine learning project using classification algorithms to predict heart disease.",
    technologies: ["Python", "Machine Learning", "Random Forest"],
    color: "blue",
  },
  {
    title: "Online Bookstore",
    category: "Web App",
    description:
      "An online bookstore management system with authentication, products, cart and order management.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    color: "purple",
  },
  {
    title: "QuizBuzz",
    category: "Java",
    description:
      "A Java-based quiz application with multiple questions, timer, scoring and feedback features.",
    technologies: ["Java", "Swing", "OOP"],
    color: "green",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            className="text-2xl font-bold text-blue-600"
          >
            Nusrat Rahe
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-blue-600">
              Home
            </a>

            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>

            <a href="#education" className="transition hover:text-blue-600">
              Education
            </a>

            <a href="#skills" className="transition hover:text-blue-600">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="flex min-h-[90vh] items-center justify-center px-6 py-20"
      >
        <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Hero Text */}
          <div className="text-center md:text-left">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-lg font-semibold text-blue-600"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 text-5xl font-bold md:text-6xl"
            >
              Nusrat Rahe
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 text-2xl font-semibold text-gray-700 md:text-3xl"
            >
              CSE Student &amp; Aspiring AI Researcher
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-8 max-w-xl leading-7 text-gray-500 md:mx-0"
            >
              I am passionate about Artificial Intelligence, Machine
              Learning, software development and research. I enjoy learning
              new technologies and building practical projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center gap-4 md:justify-start"
            >
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-blue-600 px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>

          </div>


          {/* Profile Image */}
          <div className="flex justify-center">

            <motion.img
              src="/profile.jpg"
              alt="Nusrat Rahe"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-64 w-64 rounded-full border-8 border-blue-100 object-cover shadow-2xl md:h-80 md:w-80"
            />

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl leading-8 text-gray-600"
          >
            I am a Computer Science and Engineering student with a strong
            interest in Artificial Intelligence, Machine Learning and
            research. I am continuously improving my programming skills and
            exploring modern technologies to build useful and meaningful
            projects.
          </motion.p>

        </div>
      </section>


      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="px-6 py-24"
      >
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

            {/* Education 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8"
            >

              <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-600"></div>

              <h3 className="text-2xl font-bold">
                Bachelor of Science in Computer Science &amp; Engineering
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                Metropolitan University
              </p>

              <p className="mt-2 text-gray-500">
                2023 - Present
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                Focus areas include Artificial Intelligence, Machine
                Learning, Software Engineering, Database Systems and
                Computer Networks.
              </p>

            </motion.div>


            {/* Education 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative ml-8"
            >

              <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-600"></div>

              <h3 className="text-2xl font-bold">
                Higher Secondary Certificate
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                Science Background
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                Completed higher secondary education with a focus on
                Mathematics, Physics and Computer-related subjects.
              </p>

            </motion.div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold"
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
                className="rounded-xl bg-white p-5 text-center font-semibold shadow transition hover:shadow-lg"
              >
                {skill}
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold"
          >
            Projects
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">

            {projects.map((project, index) => {

              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                purple: "bg-purple-100 text-purple-600",
                green: "bg-green-100 text-green-600",
              };

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border bg-white p-6 shadow-lg"
                >

                  <div
                    className={`mb-5 flex h-40 items-center justify-center rounded-xl ${
                      colorClasses[
                        project.color as keyof typeof colorClasses
                      ]
                    }`}
                  >
                    <span className="text-xl font-bold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-gray-100 px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-lg font-semibold text-blue-600"
            >
              Get In Touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-4xl font-bold md:text-5xl"
            >
              Let&apos;s Connect
            </motion.h2>

            <p className="mb-8 max-w-md leading-7 text-gray-600">
              I&apos;m always open to discussing projects, research ideas,
              collaborations and new opportunities.
            </p>

            {/* Social Buttons */}
            <div className="flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition hover:scale-110 hover:bg-blue-700"
              >
                <span className="text-lg font-bold">
                  in
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition hover:scale-110 hover:bg-gray-800"
              >
                <span className="text-sm font-bold">
                  GH
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition hover:scale-110 hover:bg-red-600"
              >
                <span className="text-lg">
                  ✉
                </span>
              </a>

            </div>

          </div>


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-white p-8 shadow-lg md:p-10"
            >

              <h3 className="mb-6 text-2xl font-bold">
                Send Me a Message
              </h3>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 px-6 py-8 text-center text-white">

        <p className="text-gray-400">
          © 2026 Nusrat Rahe. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Built with Next.js &amp; Tailwind CSS
        </p>

      </footer>

    </main>
  );
}
