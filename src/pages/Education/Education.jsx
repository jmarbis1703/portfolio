import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import { Award, Calendar, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Business Intelligence and Data Analytics",
      school: "La Salle Ramon Llull (Barcelona)",
      year: "2023 – 2027",
      achievements: ["GPA: 8.9/10"],
      skills: ["Big Data Analysis", "Data Mining", "Statistics", "Tech-Project Management", "Data-Driven Strategic Management"],
      description: "BI & Data Analytics degree bridging technical analysis with business strategy.",
    },
    {
      degree: "Machine Learning and Business Intelligence Summer Program",
      school: "University of Electronic Science and Technology of China",
      year: "Summer Program 2025",
      achievements: ["Model Construction", "Optimization"],
      skills: ["Predictive Modeling", "Statistical Methods", "Machine Learning", "Model Optimization"],
      description: "Intensive program on ML model construction, optimization, and predictive analytics using statistical methods.",
    },
    {
      degree: "Data Visualization Summer Program",
      school: "Pace University (New York)",
      year: "Summer Program 2024",
      achievements: ["Data Storytelling", "Web Scraping"],
      skills: ["Tableau", "Data Scraping", "Visualization", "Analytics"],
      description: "Specialized training in Tableau for data visualization and web scraping techniques for data acquisition.",
    },
    {
      degree: "International Baccalaureate and NEASC High School Diploma",
      school: "Blue Valley School (Costa Rica)",
      year: "2018 – 2022",
      achievements: ["GPA: 4.0/4"],
      skills: ["Economics", "Management", "Statistics", "Calculus", "Physics"],
      description: "Dual diploma program with foundations in quantitative & social sciences.",
    },
  ];

  return (
    <section
      className="min-h-screen relative overflow-hidden py-32"
      style={{ background: "var(--color-bg-abyss)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(43,127,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,127,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, var(--color-bg-abyss), transparent, var(--color-bg-abyss))",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading — whileInView so it triggers on scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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
              marginBottom: "0.75rem",
            }}
          >
            // 04. education
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Educational Journey
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, var(--color-primary), var(--color-teal))",
              borderRadius: "2px",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Cards — whileInView instead of animate so they trigger on scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                border: `1px solid ${hoveredIndex === index ? "var(--color-teal)" : "var(--color-border)"}`,
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                background: "var(--color-bg-card)",
                backdropFilter: "blur(8px)",
                transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                transition: "all var(--transition-normal)",
                boxShadow: hoveredIndex === index ? "var(--shadow-glow-teal)" : "none",
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  {/* Index number replaces emoji mascot */}
                  <div className="flex items-start gap-3">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-text-muted)",
                        background: "var(--color-bg-elevated)",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        letterSpacing: "0.05em",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                    </h3>
                  </div>

                  <p
                    className="flex items-center gap-2"
                    style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}
                  >
                    <BookOpen
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--color-teal)" }}
                    />
                    {edu.school}
                  </p>

                  <p
                    className="flex items-center gap-2"
                    style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {edu.year}
                  </p>
                </div>

                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    borderLeft: "2px solid var(--color-teal)",
                    paddingLeft: "0.75rem",
                    lineHeight: 1.6,
                  }}
                >
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4
                    className="flex items-center gap-2"
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <Trophy
                      className="w-4 h-4"
                      style={{ color: "var(--color-amber)" }}
                    />
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(0,201,167,0.1)",
                          color: "var(--color-teal)",
                          border: "1px solid rgba(0,201,167,0.2)",
                        }}
                      >
                        <Award className="w-3 h-3" />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.7rem",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--color-primary-glow)",
                        color: "var(--color-text-accent)",
                        border: "1px solid var(--color-border-active)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
