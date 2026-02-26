import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";

const GridBackground = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    style={{ opacity: 0.08, animation: "gridPulse 4s ease-in-out infinite" }}
  >
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

/* Shared button style — outer gradient wrapper */
const btnOuter = {
  background: "linear-gradient(135deg, var(--color-primary), var(--color-teal))",
};
/* Inner fill that fades on hover */
const btnInner = { background: "var(--color-bg-surface)" };

export default function Hero() {
  const [code] = useState(
`# analyst_profile.py

import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline

def build_profile():
    return {
        "name":    "Juan Manuel Marbis",
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
      const target =
        window.innerWidth >= 1360 && window.innerWidth <= 1370 &&
        window.innerHeight >= 760  && window.innerHeight <= 775;
      document.documentElement.style.setProperty(
        "--hero-padding-top", target ? "10rem" : "0"
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
          className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-12"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Ambient glows */}
          <div className="absolute pointer-events-none" style={{ top: "15%", left: "3%", width: "clamp(200px,30vw,420px)", height: "clamp(200px,30vw,420px)", background: "radial-gradient(circle, var(--color-primary-glow), transparent)", borderRadius: "50%", filter: "blur(90px)" }} />
          <div className="absolute pointer-events-none" style={{ bottom: "15%", right: "3%", width: "clamp(180px,25vw,360px)", height: "clamp(180px,25vw,360px)", background: "rgba(0,201,167,0.07)", borderRadius: "50%", filter: "blur(90px)" }} />

          {/* ── Two-column grid ── */}
          <div className="container mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-28 lg:py-0 lg:min-h-screen">

            {/* ── Left: Text ── */}
            <div className="flex flex-col items-start w-full animate__animated animate__fadeInLeft">

              {/* Role badge */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(43,127,255,0.08)", border: "1px solid var(--color-border-active)" }}
              >
                <i className="fas fa-chart-line text-xs" style={{ color: "var(--color-teal)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-teal)", fontWeight: 500, letterSpacing: "0.06em" }}>
                  Data Analyst &amp; BI Developer · Barcelona
                </span>
              </div>

              {/* Name */}
              <div className="w-full mb-4">
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                  <span style={{ display: "block", fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)", color: "var(--color-text-primary)" }}>
                    Juan Manuel
                  </span>
                  <span style={{
                    display: "block",
                    fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    background: "linear-gradient(135deg, #5BA4FF 0%, #00C9A7 55%, #5BA4FF 100%)",
                    backgroundSize: "200% auto",
                    animation: "gradient-shift 5s linear infinite",
                  }}>
                    Marbis
                  </span>
                </h1>
                <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg, #5BA4FF, #00C9A7)", borderRadius: "2px", marginTop: "0.6rem" }} />
              </div>

              {/* Description — no fixed maxWidth, flows with column */}
              <p className="w-full mb-5" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9rem, 1.5vw, 1.0625rem)", color: "var(--color-text-secondary)", lineHeight: 1.75, maxWidth: "52ch" }}>
                Turning raw data into strategic decisions, BI development,
                ETL pipelines, and ML modeling from concept to deployment.
              </p>

              {/* Skill tags */}
              <div className="w-full mb-6" style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {skillTags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.6rem, 1vw, 0.68rem)",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid var(--color-border-active)",
                    color: "var(--color-text-accent)",
                    background: "var(--color-primary-glow)",
                    whiteSpace: "nowrap",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs — equal width, wrap on small screens */}
              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <a
                  href="https://github.com/jmarbis1703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 sm:flex-none items-center justify-center p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ ...btnOuter, minWidth: "148px" }}
                >
                  <span
                    className="flex w-full items-center justify-center gap-2 px-6 py-2.5 rounded-[11px] text-white font-medium text-sm transition-all duration-300"
                    style={btnInner}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "transparent")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-bg-surface)")}
                  >
                    <i className="fab fa-github" />
                    GitHub
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>

                <a
                  href="/Juan Marbis CV.pdf"
                  className="group inline-flex flex-1 sm:flex-none items-center justify-center p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ ...btnOuter, minWidth: "148px" }}
                >
                  <span
                    className="flex w-full items-center justify-center gap-2 px-6 py-2.5 rounded-[11px] text-white font-medium text-sm transition-all duration-300"
                    style={btnInner}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "transparent")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-bg-surface)")}
                  >
                    Get Resume
                    <i className="fas fa-download transition-transform duration-300 group-hover:translate-y-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* ── Right: Code window ── */}
            <div className="w-full animate__animated animate__fadeInRight">
              <div className="gradient-border">
                <div className="code-window" style={{ background: "#091121" }}>
                  <div className="window-header">
                    <div className="window-dot bg-red-500" />
                    <div className="window-dot bg-yellow-500" />
                    <div className="window-dot bg-green-500" />
                    <span className="ml-2 flex items-center gap-2">
                      <i className="fas fa-code" style={{ color: "var(--color-text-muted)" }} />
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-teal-light)" }}>
                        analyst_profile.py
                      </span>
                    </span>
                  </div>
                  {/* overflow-x:auto prevents pre from blowing out the layout */}
                  <div style={{ overflowX: "auto" }}>
                    <pre className="language-python" style={{ minWidth: 0 }}>
                      <code className="language-python">{code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
              scroll
            </span>
            <i className="fas fa-chevron-down" style={{ color: "var(--color-primary-light)", opacity: 0.5, fontSize: "0.9rem" }} />
          </div>
        </section>

        <PortfolioPage />
      </main>
    </>
  );
}
