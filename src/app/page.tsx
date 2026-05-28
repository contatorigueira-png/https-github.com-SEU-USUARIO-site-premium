"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen container-px py-8 lg:py-16">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="text-caption uppercase text-ink-400">Introducing</p>
        <h1 className="font-display text-display-md md:text-display-lg lg:text-display-xl mt-2">
          Crafted with intention.
        </h1>
        <p className="text-body-lg text-ink-600 mt-3 max-w-2xl mx-auto">
          A premium foundation for serious products. Built with Next.js, Tailwind, and Framer Motion.
        </p>
      </motion.section>
    </main>
  );
}
