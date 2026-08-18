import React, { useRef, useEffect } from "react";
import IconCloudDemo from "@/components/globe";
import { Bot, Database, GitBranch, BarChart2, Briefcase, Wrench } from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, colorHex }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = colorHex;
    cardRef.current.style.boxShadow = `0 0 30px ${colorHex}22`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = "var(--color-border)";
    cardRef.current.style.boxShadow = "none";
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        padding: "1.5rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "border-color var(--transition-normal), box-shadow var(--transition-normal)",
        cursor: "default",
      }}
    >
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "var(--radius-md)",
            background: `${colorHex}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} color={colorHex} />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Skill chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              lineHeight: 1.4,
              padding: "0.3rem 0.65rem",
              borderRadius: "var(--radius-pill)",
              color: "var(--color-text-secondary)",
              background: `${colorHex}0F`,
              border: `1px solid ${colorHex}33`,
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

/* Every entry below is backed by a row in career/SKILLS_MATRIX.md.
   Ordered strongest-first, and balanced so the cards sit evenly in the grid. */
const skillCategories = [
  {
    icon: Bot,
    title: "AI & Automation",
    colorHex: "#5BA4FF",
    skills: [
      "Process Automation",
      "Low-Code / No-Code Automation",
      "LLM Integration",
      "Claude Code",
      "AI Governance",
      "Prompt Engineering & LLM APIs",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    colorHex: "#00C9A7",
    skills: [
      "Data Schema Design",
      "Data Ingestion Pipelines",
      "OCR & Document Processing",
      "Data Quality & Accuracy",
      "Data Governance",
      "ETL Pipelines",
    ],
  },
  {
    icon: Briefcase,
    title: "Investment & Finance Operations",
    colorHex: "#F59E0B",
    skills: [
      "Deal Sourcing & Screening",
      "Market & Competitive Research",
      "Due Diligence",
      "Portfolio Monitoring",
      "Partnership Development",
      "Financial Reconciliation",
      "Audit Compliance",
    ],
  },
  {
    icon: BarChart2,
    title: "Analytics & BI",
    colorHex: "#2B7FFF",
    skills: [
      "Data Visualization",
      "Dashboard Development",
      "Self-Service Reporting",
      "Exploratory Data Analysis",
      "KPI Definition & Tracking",
      "Statistical Analysis",
    ],
  },
  {
    icon: GitBranch,
    title: "Systems & Decision Support",
    colorHex: "#7B5EA7",
    skills: [
      "Decision Support Design",
      "Constraint / Resource Modeling",
      "Requirements Gathering",
      "Baseline Measurement",
      "Process Measurement",
      "Regulatory Compliance",
      "Technical Training & Enablement",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    colorHex: "#8B5CF6",
    skills: [
      "Python",
      "SQL / MySQL",
      "R",
      "Power BI",
      "Tableau",
      "VBA",
      "Airtable",
      "Google Apps Script",
      "SAP Business One",
      "Git / GitHub",
    ],
  },
];

const SkillsSection = () => (
  <main
    className="pt-15 lg:pt-0 text-white min-h-screen relative"
    style={{ background: "var(--color-bg-abyss)" }}
  >
    {/* Subtle grid background */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(43,127,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,127,255,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <section className="container mx-auto px-4 py-11 relative z-10">
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
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
          // tech ecosystem
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
          }}
        >
          Skills &amp; Toolkit
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

      {/* Globe */}
      <div className="flex justify-center items-center">
        <IconCloudDemo />
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 auto-rows-fr">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
            colorHex={category.colorHex}
          />
        ))}
      </div>
    </section>
  </main>
);

export default SkillsSection;
