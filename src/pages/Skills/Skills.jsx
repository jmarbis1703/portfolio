import React, { useRef, useEffect } from "react";
import IconCloudDemo from "@/components/globe";
import { BarChart2, Database, GitBranch, BrainCircuit, PieChart, Wrench } from "lucide-react";

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
        transition: "border-color var(--transition-normal), box-shadow var(--transition-normal)",
        cursor: "default",
      }}
    >
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
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

      {/* Proficiency bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.375rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: colorHex,
                  opacity: 0.85,
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div
              style={{
                height: "4px",
                background: "var(--color-bg-elevated)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${colorHex}80, ${colorHex})`,
                  borderRadius: "2px",
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillCategories = [
  {
    icon: BarChart2,
    title: "Analytics & BI",
    colorHex: "#2B7FFF",
    skills: [
      { name: "Exploratory Data Analysis",  level: 90 },
      { name: "KPI Definition & Tracking",  level: 85 },
      { name: "Statistical Analysis",        level: 80 },
      { name: "Self-Service Reporting",      level: 85 },
      { name: "Insight Communication",       level: 88 },
    ],
  },
  {
    icon: Database,
    title: "Data Modeling & Design",
    colorHex: "#00C9A7",
    skills: [
      { name: "ER Diagram Design",      level: 85 },
      { name: "Schema Definition",      level: 80 },
      { name: "Query Optimization",     level: 78 },
      { name: "Integrity Enforcement",  level: 82 },
      { name: "Documentation",          level: 88 },
    ],
  },
  {
    icon: GitBranch,
    title: "Data Engineering & ETL",
    colorHex: "#7B5EA7",
    skills: [
      { name: "Pipeline Automation",       level: 82 },
      { name: "Data Preprocessing",        level: 88 },
      { name: "Transformation Workflows",  level: 80 },
      { name: "Data Validation",           level: 85 },
      { name: "Data Acquisition",          level: 75 },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    colorHex: "#F59E0B",
    skills: [
      { name: "Predictive Modeling",   level: 78 },
      { name: "Feature Engineering",   level: 80 },
      { name: "Model Optimization",    level: 75 },
      { name: "Statistical Methods",   level: 82 },
      { name: "Model Construction",    level: 76 },
    ],
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    colorHex: "#EF4444",
    skills: [
      { name: "Dashboard Development",      level: 90 },
      { name: "Narrative Construction",     level: 85 },
      { name: "Interactive Analytics",      level: 80 },
      { name: "Audience-Driven Reporting",  level: 88 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    colorHex: "#8B5CF6",
    skills: [
      { name: "Python",        level: 88 },
      { name: "SQL / MySQL",   level: 85 },
      { name: "R",             level: 75 },
      { name: "Power BI",      level: 87 },
      { name: "Tableau",       level: 78 },
      { name: "Scikit-Learn",  level: 75 },
      { name: "Azure ML",      level: 70 },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
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
