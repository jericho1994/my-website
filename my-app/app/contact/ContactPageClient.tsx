"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SocialIcon } from "@/components/ui/BrandIcons";
import SpacecraftParallax from "@/components/ui/SpacecraftParallax";
import SectionTitle from "@/components/ui/SectionTitle";
import { SOCIAL_LINKS } from "@/lib/site";

type FormState = "idle" | "loading" | "success";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

/**
 * ContactPageClient
 * Contact form + social links with Star Destroyer parallax background.
 */
export default function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // TODO: integrate with an email service or API route
    await new Promise((res) => setTimeout(res, 1500));
    setFormState("success");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const reset = () => {
    setFormState("idle");
    setFormData(EMPTY_FORM);
  };

  return (
    <div className="page" style={{ maxWidth: "1100px" }}>
      <SpacecraftParallax
        craft="star-destroyer"
        side="right"
        top="10%"
        opacity={0.1}
        scale={0.7}
        parallaxRange={[-40, 40]}
      />

      <SectionTitle
        eyebrow="// Let's Connect"
        title="Get In Touch"
        subtitle="Have a project in mind, want to collaborate, or just want to say hello? My inbox is always open."
      />

      <div className="contact-grid">
        {/* ---- Contact Form ---- */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{ padding: "2rem" }}
        >
          {formState === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem 0",
                textAlign: "center",
              }}
            >
              <CheckCircle size={48} color="var(--color-saber-blue)" />
              <h3 style={{ fontSize: "1.1rem" }}>Message Sent!</h3>
              <p style={{ fontSize: "0.95rem" }}>
                Thanks for reaching out — I&apos;ll get back to you within 24 hours.
              </p>
              <button className="btn-ghost" style={{ marginTop: "1rem" }} onClick={reset}>
                Send Another
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <h3 style={{ fontSize: "1rem", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                Send a Message
              </h3>

              <div className="form-row">
                <div>
                  <label htmlFor="contact-name" className="form-label">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Project enquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  className="form-input"
                  placeholder="Tell me about your project or idea…"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ resize: "vertical", minHeight: "140px" }}
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                className="btn-primary"
                disabled={formState === "loading"}
              >
                {formState === "loading" ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* ---- Contact Info ---- */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Availability badge */}
          <div
            className="glass"
            style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <div
              aria-hidden
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#00e676",
                boxShadow: "0 0 10px #00e676",
                flexShrink: 0,
              }}
            />
            <p style={{ color: "var(--color-text-primary)", fontSize: "0.95rem" }}>
              <strong>Available for new projects</strong> — typically respond within 24h.
            </p>
          </div>

          {/* Social links */}
          <div className="glass" style={{ padding: "1.75rem" }}>
            <h3 style={{ fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
              Find Me Online
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SOCIAL_LINKS.map(({ id, label, href, handle }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`social-${id}`}
                  className="contact-link"
                >
                  <span style={{ color: "var(--color-saber-blue)" }}>
                    <SocialIcon id={id} size={20} />
                  </span>
                  <div>
                    <p className="eyebrow" style={{ letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                      {label}
                    </p>
                    <p style={{ color: "var(--color-text-primary)", fontSize: "0.9rem" }}>{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
