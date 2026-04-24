import { Code2, MonitorPlay, KanbanSquare, BrainCircuit } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    icon: BrainCircuit,
    title: "Data Science Foundations",
    desc: "Applying Python and core data libraries to analyze data, extract insights, and build learning-focused ML workflows.",
  },
  {
    icon: MonitorPlay,
    title: "Video Editing",
    desc: "Delivering structured and polished edits for content projects with attention to quality, flow, and storytelling.",
  },
  {
    icon: Code2,
    title: "Backend & Databases",
    desc: "Building backend skills and strengthening database fundamentals through MySQL, NoSQL, and practical implementation.",
  },
  {
    icon: KanbanSquare,
    title: "Entrepreneurial Ventures",
    desc: "Exploring venture ideas, investing experience, and execution-first thinking to build sustainable and valuable outcomes.",
  },
];

export default function Services() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="services" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">EXPERTISE</span>
        <h2 className="section-title">Core strengths in progress.</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6 inline-flex p-4 rounded-full" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}>
                <service.icon
                  className="w-8 h-8"
                  style={{ color: isDark ? 'var(--text-dark)' : 'var(--text-light)' }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: isDark ? "#fff" : "#0a0a0a",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
