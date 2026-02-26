import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"; isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid"; isValid = false;
    }
    if (!formData.subject.trim()) { tempErrors.subject = "Subject is required"; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Message is required"; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { setStatus("Please fill in all required fields correctly."); return; }

    const form = new FormData();
    form.append("access_key", "4b99a105-c3ee-4544-b3f7-8e3588d4a016");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "var(--radius-md)",
    background: "var(--color-bg-elevated)",
    border: `1px solid ${errors[field] ? "var(--color-red)" : "var(--color-border)"}`,
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color var(--transition-fast)",
  });

  return (
    <main
      className="pt-20 lg:pt-0 text-white min-h-screen"
      style={{ background: "var(--color-bg-surface)" }}
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left column: Contact Info ── */}
            <div className="space-y-8">
              {/* Section heading */}
              <div>
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
                  // 05. contact
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Get in Touch
                </h2>
                <div
                  style={{
                    width: "48px",
                    height: "3px",
                    background: "linear-gradient(90deg, var(--color-primary), var(--color-teal))",
                    borderRadius: "2px",
                    marginBottom: "1rem",
                  }}
                />
                <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
                  Interested in collaboration? Let&apos;s connect.
                </p>
              </div>

              {/* Availability badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
              >
                <span style={{ position: "relative", display: "inline-flex" }}>
                  <span
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "var(--color-emerald)",
                      opacity: 0.4,
                      animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--color-emerald)",
                      position: "relative",
                      display: "block",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--color-emerald)",
                    fontWeight: 500,
                  }}
                >
                  Open to opportunities
                </span>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div
                    style={{
                      background: "rgba(43,127,255,0.1)",
                      border: "1px solid var(--color-border)",
                      padding: "0.75rem",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "var(--color-primary-light)" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      Email
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", fontFamily: "var(--font-mono)" }}>
                      jmarbis1@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    style={{
                      background: "rgba(0,201,167,0.1)",
                      border: "1px solid var(--color-border)",
                      padding: "0.75rem",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      Location
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>
                      Barcelona, Spain
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { label: "GitHub",   href: "https://github.com/jmarbis1703", icon: "fab fa-github" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/juan-marbis", icon: "fab fa-linkedin" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.625rem 1rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-bg-card)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                      transition: "border-color var(--transition-fast), color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary)";
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color = "var(--color-text-secondary)";
                    }}
                  >
                    <i className={social.icon} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right column: Contact Form ── */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-2xl)",
                padding: "2rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={inputStyle("name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? "var(--color-red)" : "var(--color-border)")}
                  />
                  {errors.name && (
                    <p style={{ color: "var(--color-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={inputStyle("email")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? "var(--color-red)" : "var(--color-border)")}
                  />
                  {errors.email && (
                    <p style={{ color: "var(--color-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    style={inputStyle("subject")}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.subject ? "var(--color-red)" : "var(--color-border)")}
                  />
                  {errors.subject && (
                    <p style={{ color: "var(--color-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    style={{ ...inputStyle("message"), resize: "none" }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? "var(--color-red)" : "var(--color-border)")}
                  />
                  {errors.message && (
                    <p style={{ color: "var(--color-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.875rem",
                    borderRadius: "var(--radius-md)",
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-teal))",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "opacity var(--transition-fast), transform var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {status && (
                <div
                  style={{
                    marginTop: "1rem",
                    textAlign: "center",
                    color: status.includes("success") ? "var(--color-emerald)" : "var(--color-red)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                  }}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
