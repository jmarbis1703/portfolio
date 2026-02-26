/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        // shadcn compatibility — resolved from CSS variables
        background: "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        // Brand tokens — usable as Tailwind classes e.g. bg-brand-primary
        brand: {
          primary: "#2B7FFF",
          light:   "#5BA4FF",
          teal:    "#00C9A7",
          mint:    "#4DDFC4",
          violet:  "#7B5EA7",
          amber:   "#F59E0B",
          emerald: "#10B981",
          red:     "#EF4444",
          purple:  "#8B5CF6",
        },
        surface: {
          abyss:    "#050B18",
          dark:     "#0A1628",
          card:     "#0F1E35",
          elevated: "#162340",
        },
        "surface-border":  "#1E3254",
        "surface-active":  "#1E4A7A",
      },
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
      },
      animation: {
        meteor:        "meteor 5s linear infinite",
        "float-slow":  "float-slow 7s ease-in-out infinite",
        float:         "float 6s ease-in-out infinite",
        "skill-fill":  "skillFill 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "grid-pulse":  "gridPulse 4s ease-in-out infinite",
        "gradient-xy": "gradient-xy 6s ease infinite",
        "gradient-x":  "gradient-shift 4s linear infinite",
        ping:          "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
