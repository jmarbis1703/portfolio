import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Sync activeLink when navigating via browser back/forward
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        {/* Gradient border using CSS variables */}
        <div
          style={{
            padding: "1px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, var(--color-primary), var(--color-teal))",
          }}
        >
          <nav
            style={{ background: "rgba(10, 22, 40, 0.92)" }}
            className="backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5"
          >
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link
                to="/"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                className="font-bold text-sm"
              >
                Juan Marbis
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ color: "var(--color-text-primary)" }}
                className="p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: activeLink === id ? 600 : 400,
                      color: activeLink === id ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      background: activeLink === id ? "rgba(43, 127, 255, 0.12)" : "transparent",
                      transition: "all var(--transition-fast)",
                    }}
                    className="px-3 py-2 md:py-1.5 rounded-lg md:rounded-full flex items-center gap-2 hover:bg-white/10 hover:text-white"
                  >
                    <Icon
                      style={{
                        color: activeLink === id ? "var(--color-primary-light)" : "inherit",
                        transform: activeLink === id ? "scale(1.1)" : "scale(1)",
                        transition: "transform var(--transition-fast)",
                      }}
                      className="text-base"
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
