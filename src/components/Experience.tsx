import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const experiences = [
  {
    role: "Freelancer",
    org: "Independent",
    type: "Freelance",
    period: "Ongoing",
    location: "India · Remote",
    description:
      "Worked on independent freelance assignments, building client communication, delivery discipline, and practical execution under timelines.",
    tags: ["Freelancing", "Communication", "Execution"],
  },
  {
    role: "Video Editing Experience",
    org: "Independent Projects",
    type: "Creative Work",
    period: "Ongoing",
    location: "India · Remote",
    description:
      "Handled editing workflows for content and project deliverables, improving storytelling, quality control, and consistency across outputs.",
    tags: ["Video Editing", "Content Workflows", "Creative Production"],
  },
  {
    role: "Investor & Venture Builder",
    org: "Personal Ventures",
    type: "Entrepreneurial",
    period: "Ongoing",
    location: "India",
    description:
      "Built and managed multiple personal ventures while developing practical experience in investing, decision-making, and long-term value creation.",
    tags: ["Investing", "Entrepreneurship", "Strategic Thinking"],
  },
];

export default function Experience() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="experience" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">EXPERIENCE</span>
        <h2 className="section-title">
          Practical experience and ventures.
        </h2>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card group relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(to bottom, var(--text-dark), transparent)",
                  opacity: 0.5,
                }}
              />

              <div className="pl-5">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        color: isDark ? "#fff" : "#0a0a0a",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-medium mt-1 flex items-center gap-2"
                      style={{ color: isDark ? "var(--text-dark)" : "var(--text-light)" }}
                    >
                      {exp.org}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </p>
                  </div>
                  <span className="tag">{exp.type}</span>
                </div>

                <div
                  className="flex flex-wrap gap-4 text-xs mb-4"
                  style={{ color: isDark ? "#737373" : "#9ca3af" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
