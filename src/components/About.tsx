import {
  BrainCircuit,
  TrendingUp,
  Briefcase,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const interests = [
  {
    icon: BrainCircuit,
    title: "Data Science & ML",
    desc: "Learning practical data science and machine learning to build systems that are useful, measurable, and scalable.",
  },
  {
    icon: TrendingUp,
    title: "Backend & Databases",
    desc: "Building backend fundamentals while gaining hands-on expertise in relational and non-relational database systems.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurial Mindset",
    desc: "Interested in ventures, execution, and turning ideas into practical products with long-term value.",
  },
  {
    icon: Wrench,
    title: "Freelance Experience",
    desc: "Applying communication, delivery, and creative problem-solving skills through freelancing and client work.",
  },
];

export default function About() {
  const { isDark } = useTheme();
  const fadeOne = useFadeIn();
  const fadeTwo = useFadeIn();
  const fadeThree = useFadeIn();

  return (
    <section id="about" className="section">
      <div
        ref={fadeOne.ref}
        className={`fade-section ${fadeOne.visible ? "visible" : ""}`}
      >
        <span className="section-label">ABOUT</span>
        <h2 className="section-title">
          Yash Kumar Shukla.<br />
          Building with consistency.
        </h2>
      </div>

      <div
        ref={fadeTwo.ref}
        className={`fade-section ${fadeTwo.visible ? "visible" : ""} mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12`}
      >
        {/* Text Column */}
        <div className="lg:col-span-3 space-y-6">
          <p className="section-text">
            I am Yash Kumar Shukla, currently in the second semester at Lovely Professional University, pursuing Computer Science Engineering with specialization in Data Science and Machine Learning.
          </p>
          <p className="section-text">
            I am actively learning backend development and developing expertise in databases, with certifications in MySQL and NoSQL. Alongside this, I continue strengthening my core programming and problem-solving skills through hands-on project work.
          </p>
          <p className="section-text">
            I have completed certifications in Version Control, Python, and Web Scraping, which support my ability to contribute to modern development workflows and data-focused applications.
          </p>
          <p className="section-text">
            I also have experience in freelancing, video editing, and investing, and I have worked on multiple ventures of my own. These experiences helped me build practical discipline, ownership, and an entrepreneurial mindset.
          </p>
          <p className="section-text">
            My current focus is to keep growing as an engineer by combining data science, backend fundamentals, and database design into projects that solve real problems and create meaningful impact.
          </p>

          {/* How I Work */}
          <div
            className="mt-10 p-6 rounded-2xl border"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.02)"
                : "rgba(0,0,0,0.02)",
              borderColor: isDark
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{
                fontFamily: "'Fira Code', monospace",
                color: isDark ? "var(--text-dark)" : "var(--text-light)",
              }}
            >
              How I Work
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
            >
              I use a learning-by-building approach. I start with a clear objective, implement working versions quickly, and then refine architecture, code quality, and user value step by step.
              <br /><br />
              I value consistency, ownership, and practical outcomes. This helps me balance technical growth with execution and delivery.
            </p>
          </div>

          {/* Current Direction */}
          <div
            className="p-6 rounded-2xl border"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.02)"
                : "rgba(0,0,0,0.02)",
              borderColor: isDark ? "#1a1a1a" : "#e5e5e5",
            }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{
                fontFamily: "'Fira Code', monospace",
                color: isDark ? "var(--text-dark)" : "var(--text-light)",
              }}
            >
              Current Direction
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
            >
              Currently, I am focused on strengthening backend and database expertise while building a solid foundation in data science and machine learning.
              <br /><br />
              I am also exploring entrepreneurial opportunities where technical solutions can be turned into practical, scalable ventures.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors"
              style={{ color: isDark ? "var(--text-dark)" : "var(--text-light)" }}
            >
              Let's connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interest Cards */}
        <div
          ref={fadeThree.ref}
          className={`fade-section ${fadeThree.visible ? "visible" : ""} lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4`}
        >
          {interests.map((item) => (
            <div key={item.title} className="card group">
              <item.icon
                className="w-6 h-6 mb-4 transition-colors duration-300"
                style={{ color: isDark ? "var(--text-dark)" : "var(--text-light)" }}
              />
              <h4
                className="text-base font-semibold mb-2"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: isDark ? "#fff" : "#0a0a0a",
                }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? "#737373" : "#6b7280" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
