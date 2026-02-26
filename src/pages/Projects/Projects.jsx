import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

import abTestImg from "../../assets/images/ab_test.png";
import ga360Img from "../../assets/images/funnel.png";
import neuralNetImg from "../../assets/images/neural.png";

const projects = [
  {
    title: "A/B Test Checkout Redesign",
    description:
      "Python A/B test analysis of a checkout funnel. Leveraged SRM checks and temporal lift tracking to detect a novelty effect, saving $25k by rejecting a statistically insignificant UI redesign.",
    metric: { value: "$25K", label: "saved from false positive" },
    techStack: ["Python", "SciPy", "Pandas", "Matplotlib"],
    src: "checkout.jpg",
    link: abTestImg,
    color: "#5196fd",
    githubLink: "https://github.com/jmarbis1703/ab-test-checkout-redesign",
    liveLink: "https://github.com/jmarbis1703/ab-test-checkout-redesign",
  },
  {
    title: "GA360 Funnel Analysis",
    description:
      "Data driven GA360 funnel optimization for the Google Merchandise Store. Identifies 5 key bottlenecks, from 86% homepage drop-off to mobile UX gaps with strategic recommendations.",
    metric: { value: "$379K", label: "incremental revenue opportunity" },
    techStack: ["GA360", "BigQuery", "SQL", "Tableau"],
    src: "funnel.jpg",
    link: ga360Img,
    color: "#4ade80",
    githubLink: "https://github.com/jmarbis1703/ga360-funnel-analysis",
    liveLink: "https://github.com/jmarbis1703/ga360-funnel-analysis",
  },
  {
    title: "Neural Network from Scratch",
    description:
      "A custom neural network built entirely from scratch using NumPy. Engineered with fully tested backpropagation, early stopping, and reproducible training architecture.",
    metric: { value: "100%", label: "from-scratch, no ML frameworks" },
    techStack: ["Python", "NumPy", "Matplotlib"],
    src: "neural.jpg",
    link: neuralNetImg,
    color: "#8f89ff",
    githubLink: "https://github.com/jmarbis1703/from_scratch_neural_network",
    liveLink: "https://github.com/jmarbis1703/from_scratch_neural_network",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <ReactLenis root>
      <main className="bg-black relative" ref={container}>
        {/* Section header */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "5rem 2rem 2rem",
            textAlign: "center",
            background: "var(--color-bg-abyss)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            // 03. projects
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
            }}
          >
            Selected Work
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, var(--color-primary), var(--color-teal))",
              borderRadius: "2px",
              margin: "1rem auto 0",
            }}
          />
        </div>

        {/* Side progress dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
          {projects.map((_, index) => {
            const start = index / projects.length;
            const end = (index + 1) / projects.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
            const scale = useTransform(scrollYProgress, [start, end], [1, 1.5]);
            return (
              <motion.div
                key={index}
                style={{ opacity, scale }}
                className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            );
          })}
        </div>

        {/* Scroll signal */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-gray-400 pointer-events-none"
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/40">Scroll</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.div>

        <section className="text-white w-full bg-black">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                total={projects.length}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                metric={project.metric}
                techStack={project.techStack}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  total,
  title,
  description,
  url,
  color,
  metric,
  techStack,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div
          className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          {/* Image section */}
          <div
            className="w-full md:w-[55%] h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden"
            style={{
              background: "var(--color-bg-surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-contain p-4"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            <div
              className="absolute top-4 left-4 md:top-6 md:left-6 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold z-10"
              style={{
                background: "rgba(5,11,24,0.8)",
                border: "1px solid var(--color-border)",
                fontFamily: "var(--font-mono)",
                color: "var(--color-text-secondary)",
              }}
            >
              {i + 1} / {total}
            </div>
          </div>

          {/* Content section */}
          <div
            className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between"
            style={{ background: "var(--color-bg-card)" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: color }} />
                <div className="h-[1px] w-12 md:w-20" style={{ background: "var(--color-border)" }} />
              </div>

              <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4"
                style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
              >
                {title}
              </h2>

              <p
                className="text-sm md:text-base leading-relaxed font-medium line-clamp-5 md:line-clamp-none"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {description}
              </p>

              {/* Impact metric */}
              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "0.875rem 1rem",
                  background: `${color}12`,
                  borderRadius: "var(--radius-md)",
                  borderLeft: `3px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    color: color,
                  }}
                >
                  {metric.value}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {metric.label}
                </span>
              </div>

              {/* Tech stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "1rem" }}>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--color-bg-elevated)",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] mb-4 md:mb-6" style={{ background: "var(--color-border)" }} />
              <div className="flex items-center gap-6">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span
                    className="text-xs md:text-sm font-bold"
                    style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                  >
                    Source Code
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string.isRequired,
  metric: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
