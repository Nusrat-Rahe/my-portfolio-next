"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
  return (
    <main
  className={`min-h-screen transition-colors duration-500 ${
    darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
  }`}
>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow">
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="ml-4 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition"
>
  {darkMode ? "☀️" : "🌙"}
</button>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-sky-600">
            Nusrat Rahe
          </h1>

          <div className="hidden md:flex gap-7">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>

            <a href="#about" className="hover:text-blue-600">
              About
            </a>

            <a href="#education" className="hover:text-blue-600">
              Education
            </a>

            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
<section
  id="home"
  className="min-h-[90vh] flex items-center justify-center px-6 py-20"
>
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div className="text-center md:text-left">

      <p className="text-blue-600 font-semibold text-lg mb-3">
        Hello, I'm
      </p>

     <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-6xl font-bold mb-5"
>
  Nusrat Rahe
</motion.h2>

      <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-5">
        CSE Student & Aspiring AI Researcher
      </h3>

      <p className="text-gray-500 leading-7 max-w-xl mb-8">
        I am passionate about Artificial Intelligence, Machine Learning,
        software development and research. I enjoy learning new technologies
        and building practical projects.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 justify-center md:justify-start">

        <a
          href="#projects"
          className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>

      </div>

    </div>


    {/* Right Side - Profile */}
    <div className="flex justify-center">
  <motion.img
  src="/profile.jpg"
  alt="Nusrat Rahe"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
/>
</div>

  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="max-w-3xl text-center text-lg text-gray-600 leading-8">
          I am a Computer Science and Engineering student with an interest
          in Artificial Intelligence, Machine Learning and research.
          I enjoy programming, exploring new technologies and developing
          practical solutions to real-world problems.
        </p>
      </section>


      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-16">
          Education
        </h2>

        <div className="relative max-w-3xl w-full">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>


          {/* University */}
          <div className="relative flex items-start mb-12">

            <div className="w-9 h-9 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>

            <div className="ml-8 bg-white p-6 rounded-xl shadow w-full">
              <p className="text-sm text-blue-600 font-semibold">
                2023 - Present
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Bachelor of Science in Computer Science & Engineering
              </h3>

              <p className="text-gray-600 mt-2">
                Metropolitan University
              </p>

              <p className="text-gray-500 mt-3 leading-7">
                Studying programming, data structures, algorithms,
                artificial intelligence, machine learning, software
                engineering and other areas of computer science.
              </p>
            </div>

          </div>


          {/* HSC */}
          <div className="relative flex items-start">

            <div className="w-9 h-9 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>

            <div className="ml-8 bg-white p-6 rounded-xl shadow w-full">
              <p className="text-sm text-blue-600 font-semibold">
                Previous Education
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Higher Secondary Certificate
              </h3>

              <p className="text-gray-600 mt-2">
                Your College Name
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              C++
            </h3>
            <p className="text-gray-500 mt-2">
              Programming & DSA
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              Java
            </h3>
            <p className="text-gray-500 mt-2">
              Object-Oriented Programming
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              Python
            </h3>
            <p className="text-gray-500 mt-2">
              AI & Data Analysis
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              HTML & CSS
            </h3>
            <p className="text-gray-500 mt-2">
              Web Development
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              JavaScript
            </h3>
            <p className="text-gray-500 mt-2">
              Frontend Development
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              Next.js
            </h3>
            <p className="text-gray-500 mt-2">
              Modern Web Development
            </p>
          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">

          {/* Project 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">
              Online Bookstore
            </h3>

            <p className="text-gray-600 mb-4 leading-7">
              A web-based bookstore management system developed
              using PHP, MySQL, HTML, CSS and JavaScript.
            </p>

            <span className="text-sm font-medium text-blue-600">
              PHP • MySQL • JavaScript
            </span>
          </div>


          {/* Project 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">
              QuizBuzz
            </h3>

            <p className="text-gray-600 mb-4 leading-7">
              A Java Swing quiz application with multiple-choice
              questions, timer, login system and result feedback.
            </p>

            <span className="text-sm font-medium text-blue-600">
              Java • Swing • OOP
            </span>
          </div>


          {/* Project 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">
              Fire Fighting Robot
            </h3>

            <p className="text-gray-600 mb-4 leading-7">
              An Arduino-based robot designed to detect fire using
              flame sensors and automatically control a water pump.
            </p>

            <span className="text-sm font-medium text-blue-600">
              Arduino • C/C++ • Electronics
            </span>
          </div>

        </div>
      </section>


      
```tsx
{/* ================= CONTACT ================= */}
<section
  id="contact"
  className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-20"
>
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT SIDE ================= */}
    <div>

      <p className="text-blue-600 font-semibold text-lg mb-3">
        Get In Touch
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Let's Connect
      </h2>

      <p className="text-gray-600 leading-7 max-w-md mb-8">
        I'm always open to discussing new projects, research ideas,
        collaborations, or interesting opportunities. Feel free to
        connect with me through the platforms below.
      </p>


      {/* Social Links */}
<div className="flex gap-4">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg hover:scale-110 transition"
  >
    in
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-sm hover:scale-110 transition"
  >
    GH
  </a>

  {/* Email */}
  <a
    href="mailto:your-email@example.com"
    aria-label="Email"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-lg hover:scale-110 transition"
  >
    @
  </a>

      </div>

    </div>


    {/* ================= RIGHT SIDE ================= */}
    <div>

      <form className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full">

        <h3 className="text-2xl font-bold mb-6">
          Send Me a Message
        </h3>


        {/* Name */}
        <div className="mb-5">

          <label className="block font-semibold mb-2">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

        </div>


        {/* Email */}
        <div className="mb-5">

          <label className="block font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

        </div>


        {/* Message */}
        <div className="mb-6">

          <label className="block font-semibold mb-2">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          ></textarea>

        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>
```



      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          © 2026 Nusrat Rahe. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
