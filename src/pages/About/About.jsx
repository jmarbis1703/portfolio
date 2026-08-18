import React from "react";
import HeroImg from "@/assets/images/hero.jpeg";
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
                Making the process
                <br />
                <span
                  style={{
                    display: "inline-block",
                    // `background` shorthand must precede the clip/fill properties
                    background: "linear-gradient(135deg, #5BA4FF, #00C9A7)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  carry the load
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
                . My work is operational. I take the internal processes an organisation
                depends on but has never formalised, establish what they actually cost,
                and rebuild them so that{" "}
                <span style={{ color: "var(--color-primary-light)" }}>automation and AI</span>{" "}
                carry the load.
              </p>
              <p>
                The work divides into two halves of equal weight. The first is engineering:
                AI-driven internal tooling, document ingestion, reporting automation, and
                constraint modelling for allocation decisions. Much of it comes down to{" "}
                <span style={{ color: "var(--color-teal-light)" }}>
                  structuring information so that an AI system can use it reliably
                </span>
                . The second half determines whether any of it endures. I quantify what a
                manual process costs before replacing it, so the result is a measurement
                rather than a claim, I hold the output to the accuracy standard reporting
                requires, and I train the people who inherit the system.
              </p>
              <p>
                Right now that work sits inside a{" "}
                <span style={{ color: "var(--color-primary-light)" }}>venture capital firm</span>,
                where I also screen potential investments, research markets and competitive
                landscapes, and support due diligence and portfolio monitoring. I lead the
                venture capital area of my university&apos;s Finance Society alongside it, and
                my first finance role was on the operations side, reconciling accounts and
                keeping ERP data audit-ready.
              </p>
              <p>
                The binding constraint is rarely the model. It is the data underneath, the
                workflow that already exists around it, and whether the people using it
                trust the output.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
