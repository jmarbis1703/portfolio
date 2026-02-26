import React from "react";
import HeroImg from "@/assets/images/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};


export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--color-bg-surface)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full"
          style={{ background: "rgba(43,127,255,0.07)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full"
          style={{ background: "rgba(0,201,167,0.06)", filter: "blur(100px)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ── Left column: Image ── */}
          <motion.div variants={itemVariants} className="relative group">
            <div
              className="relative rounded-2xl p-1 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--color-border), var(--color-border-active))",
              }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={HeroImg}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Juan Marbis"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7), transparent)" }}
                />
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 backdrop-blur-md p-4 rounded-xl shadow-xl hidden md:block"
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "var(--color-emerald)" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-3 w-3"
                    style={{ background: "var(--color-emerald)" }}
                  />
                </span>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider font-semibold"
                    style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    Based in
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Barcelona, Spain
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: Content ── */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              {/* Overline */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                // 01. about
              </span>

              {/* Heading */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "var(--color-text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Turning data into
                <br />
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    background: "linear-gradient(135deg, #5BA4FF, #00C9A7)",
                    display: "inline-block",
                  }}
                >
                  strategic decisions
                </span>
              </h2>

              {/* Accent bar */}
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-primary), var(--color-teal))",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
              style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}
            >
              <p>
                Hello, I&apos;m{" "}
                <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                  Juan Marbis
                </span>
                , a data professional focused on turning complex data into strategic value.
              </p>
              <p>
                Working across industries has shown me that the best insights come when{" "}
                <span style={{ color: "var(--color-primary-light)" }}>technical skills</span> and{" "}
                <span style={{ color: "var(--color-teal-light)" }}>real business understanding</span>{" "}
                work together. Whether it&apos;s building data pipelines or designing dashboards,
                my goal is always the same — give people the clarity they need to make better
                decisions.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
