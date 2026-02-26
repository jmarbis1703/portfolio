import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.08, animation: "gridPulse 4s ease-in-out infinite" }}>
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="#2B7FFF" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

const skillTags = [
  "Power BI & DAX",
  "Python · Pandas · NumPy",
  "SQL & ETL Pipelines",
  "Generative AI & LLMs",
  "Azure · Databricks",
  "Statistical Modeling",
];

export default function Hero() {
  const [code] = useState(
`# analyst_profile.py

import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline

def build_profile():
    return {
        "name":    "Juan Manuel Marbis Fernandez",
        "role":    "Data Analyst & BI Developer",
        "bi":      ["Power BI", "DAX", "Tableau"],
        "stack":   ["Python", "SQL", "R"],
        "cloud":   ["Azure", "Databricks"],
        "ai":      ["LLM APIs", "Prompt Engineering"],
        "cert":    "IBM Data Science Professional",
        "open_to_work": True
    }

# 85% reduction in manual overhead
# via automated VBA + SQL reporting engine`
  );

  useEffect(() => {
    Prism.highlightAll();

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;
      document.documentElement.style.setProperty(
        "--hero-padding-top",
        isTargetResolution ? "12rem" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => window.removeEventListener("resize", checkResolution);
  }, [code]);

  return (
    <>
      <main style={{ background: "var(--color-bg-abyss)" }} className="text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0" />
          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* ── Left column ── */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Ambient glows */}
              <div
                className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-64 h-64"
                style={{ background: "radial-gradient(circle, var(--color-primary-glow), transparent)", borderRadius: "50%", filter: "blur(60px)" }}
              />
              <div
                className="absolute hidden lg:block lg:top-40 lg:-right-20 w-64 h-64"
                style={{ background: "rgba(0,201,167,0.08)", borderRadius: "50%", filter: "blur(60px)" }}
              />

              {/* Name heading */}
              <div className="relative mb-6 sm:mb-8">
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    lineHeight: 1.05,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Juan Manuel
                  <br />
                  <span
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      background: "linear-gradient(135deg, #5BA4FF 0%, #00C9A7 50%, #5BA4FF 100%)",
                      backgroundSize: "200% auto",
                      animation: "gradient-shift 5s linear infinite",
                      display: "inline-block",
                    }}
                  >
                    Marbis Fernandez
                  </span>
                </h1>
              </div>

              {/* Role badge */}
              <div
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                style={{
                  background: "rgba(43,127,255,0.08)",
                  border: "1px solid var(--color-border-active)",
                }}
              >
                <i
                  className="fas fa-chart-line text-sm sm:text-base"
                  style={{ color: "var(--color-primary-light)" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                    color: "var(--color-primary-light)",
                    fontWeight: 500,
                  }}
                >
                  Data Analyst &amp; BI Developer · Barcelona
                </span>
              </div>

              {/* Short description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--color-text-secondary)",
                  maxWidth: "480px",
                  marginBottom: "1.5rem",
                  lineHeight: 1.7,
                }}
                className="animate__animated animate__fadeInUp animate__delay-1s"
              >
                Turning raw data into strategic decisions — BI development,
                ETL pipelines, and ML modeling from concept to deployment.
              </p>

              {/* Skill tag strip */}
              <div
                className="animate__animated animate__fadeInUp animate__delay-1s"
                style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}
              >
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--color-border-active)",
                      color: "var(--color-text-accent)",
                      background: "var(--color-primary-glow)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                <a
                  href="https://github.com/jmarbis1703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-teal))" }}
                >
                  <span
                    className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] transition-all duration-300"
                    style={{ background: "var(--color-bg-surface)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "transparent")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-bg-surface)")}
                  >
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <i className="fab fa-github" />
                      <span>GitHub</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>

                <a
                  href="/Juan Marbis CV.pdf"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-teal))" }}
                >
                  <span
                    className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] transition-all duration-300"
                    style={{ background: "var(--color-bg-surface)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "transparent")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-bg-surface)")}
                  >
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Get Resume</span>
                      <i className="fas fa-download transform transition-all duration-300 group-hover:translate-y-1" />
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* ── Right column — Python code window ── */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window" style={{ background: "#091121" }}>
                  <div className="window-header">
                    <div className="window-dot bg-red-500" />
                    <div className="window-dot bg-yellow-500" />
                    <div className="window-dot bg-green-500" />
                    <span className="ml-2 flex items-center gap-2">
                      <i className="fas fa-code" style={{ color: "var(--color-text-muted)" }} />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "var(--color-teal-light)",
                        }}
                      >
                        analyst_profile.py
                      </span>
                    </span>
                  </div>
                  <pre className="language-python">
                    <code className="language-python">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-4">
          <span
            className="text-2xl font-bold flex items-center gap-4 tracking-wide"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <i className="fas fa-mouse text-2xl" style={{ color: "var(--color-primary-light)" }} />
            About me
          </span>
          <i className="fas fa-chevron-down text-5xl opacity-80" style={{ color: "var(--color-primary-light)" }} />
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
