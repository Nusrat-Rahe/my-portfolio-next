"use client";

import { motion } from "framer-motion";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.7h2.9V18H5.5V9.7Zm5.1 0h2.76v1.12h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.42 1.9 3.42 4.37V18h-2.9v-16.7h2.9V18h-2.9v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.78V18h-2.9V9.7Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.59-2.82 5.6-5.5 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950/20 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-lg font-semibold text-sky-400"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl"
          >
            Let&apos;s Connect
          </motion.h2>

          <p className="mb-8 max-w-md leading-7 text-slate-300">
            I&apos;m always open to discussing projects, research ideas,
            collaborations and new opportunities.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/85 text-white shadow-md shadow-sky-500/20 transition hover:scale-110 hover:bg-sky-400"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-md shadow-slate-900/20 transition hover:scale-110 hover:bg-slate-800"
            >
              <GitHubIcon />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/85 text-white shadow-md shadow-violet-500/20 transition hover:scale-110 hover:bg-violet-400"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/30 md:p-10">
            <h3 className="mb-6 text-2xl font-bold text-white">Send Me a Message</h3>

            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block font-semibold text-slate-200">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/30"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block font-semibold text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block font-semibold text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-sky-500/85 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
