import React, { useRef } from "react";
import { BrainCircuit, Globe, Landmark, Database, TrendingUp } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon, colorHex = "#2B7FFF" }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = colorHex;
    cardRef.current.style.transform = "translateY(-4px)";
    cardRef.current.style.boxShadow = "var(--shadow-glow-primary)";
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = "var(--color-border)";
    cardRef.current.style.transform = "translateY(0)";
    cardRef.current.style.boxShadow = "none";
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        background: "var(--color-bg-card)",
        borderRadius: "var(--radius-xl)",
        padding: "2rem",
        border: "1px solid var(--color-border)",
        transition: "border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal)",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "var(--radius-md)",
          background: `${colorHex}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Icon style={{ width: "24px", height: "24px", color: colorHex }} />
      </div>

      <div className="space-y-3">
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h3>

        <div className="flex justify-between items-center flex-wrap gap-2">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "var(--color-primary-light)",
            }}
          >
            {company}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              background: "var(--color-primary-glow)",
              border: "1px solid var(--color-border-active)",
              color: "var(--color-text-accent)",
              padding: "0.25rem 0.75rem",
              borderRadius: "var(--radius-pill)",
            }}
          >
            {period}
          </span>
        </div>

        <div
          style={{
            color: "var(--color-text-secondary)",
            borderLeft: `3px solid ${colorHex}50`,
            paddingLeft: "1rem",
            marginTop: "1rem",
            lineHeight: 1.7,
            fontSize: "0.9rem",
          }}
          className="space-y-3"
        >
          {Array.isArray(description) ? (
            description.map((item, i) => <p key={i}>{item}</p>)
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div
          className="absolute top-0 right-0 w-6"
          style={{ height: "2px", background: `${colorHex}40` }}
        />
        <div
          className="absolute top-0 right-0 w-[2px] h-6"
          style={{ background: `${colorHex}40` }}
        />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: BrainCircuit,
      colorHex: "#5BA4FF",
      title: "Investment & AI Operations Analyst",
      company: "4Founders Capital",
      period: "July 2026 - Present",
      description: [
        "Designed a new data schema and built an automated document ingestion pipeline, now in testing, to make internal data usable by AI systems. Ran the baseline study behind it, measuring what the manual process cost before replacing it.",
        "Delivered internal AI enablement and governance training. Research markets and competitive landscapes, screen potential investments, and support due diligence and portfolio monitoring. Report mostly directly to the founders.",
      ],
    },
    {
      icon: Globe,
      colorHex: "#00C9A7",
      title: "Co-Director, UNDP Committee",
      company: "National Model United Nations Spain",
      period: "April 2026 - Present",
      description: [
        "Authored the committee's background guide, “Technology and Governance in Today's Digital Age”, the reference document delegates use to prepare for debate.",
        "Co-Director of a 100+ delegate committee at NMUN Spain's inaugural edition, Barcelona, November 2026.",
      ],
    },
    {
      icon: Landmark,
      colorHex: "#A78BFA",
      title: "Vice President, VC Area Lead",
      company: "Finance Society, La Salle Ramon Llull",
      period: "August 2026 - Present",
      description: [
        "Lead the venture capital area of the university's Finance Society.",
        "Working with the society beforehand, personally identified, approached and secured 4 to 8 courses and talks from external market experts to collaborate with the society.",
      ],
    },
    {
      icon: Database,
      colorHex: "#2B7FFF",
      title: "Database Management & Systems Design",
      company: "La Salle Ramon Llull University",
      period: "December 2025 - May 2026",
      description: [
        "Reduced institutional enrollment overhead by 85% by engineering an end-to-end pipeline that replaced a weeks-long email process with a real-time survey ingestion engine. Developed a single-click VBA interface to automate course matching, PDF generation, and direct HR record propagation.",
        "Built an academic scheduling optimization engine that streamlined faculty assignments and timetabling across the entire business school, covering hundreds of professors. A custom decision support framework integrated multi-dimensional constraints, including regulatory compliance, workload balancing, and resource allocation logic, to reduce time to decision.",
      ],
    },
    {
      icon: TrendingUp,
      colorHex: "#F59E0B",
      title: "Finance & Operations Analyst",
      company: "Garnier y Garnier Desarrollos Inmobiliarios",
      period: "May 2023 - August 2023",
      description: [
        "Optimized financial operations and bank reconciliations using SAP Business One to ensure audit compliance and strategic data accuracy for the development team.",
      ],
    },
  ];

  return (
    <main
      className="min-h-screen relative overflow-hidden pt-32 pb-20"
      style={{ background: "var(--color-bg-surface)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(43,127,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      <div className="relative container mx-auto px-6 mt-10">
        {/* Section heading */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
            }}
          >
            // 03. experience
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              textAlign: "center",
            }}
          >
            Professional Journey
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, var(--color-primary), var(--color-teal))",
              borderRadius: "2px",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto [&>*:last-child:nth-child(odd)]:lg:col-span-2 [&>*:last-child:nth-child(odd)]:lg:max-w-[calc(50%-1rem)] [&>*:last-child:nth-child(odd)]:lg:mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ExperienceSection;
