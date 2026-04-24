import { useFadeIn } from "@/hooks/useFadeIn";

const skills = [
  "Python",
  "Version Control",
  "Web Scraping",
  "Backend Development",
  "MySQL",
  "NoSQL",
  "SQL",
  "Database Fundamentals",
  "Data Analysis",
  "NumPy",
  "Git",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Problem Solving",
  "Entrepreneurial Thinking",
  "Collaboration",
  "Communication",
];

export default function Skills() {
  const fade = useFadeIn();

  return (
    <section id="skills" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">SKILLS & TECHNOLOGIES</span>
        <h2 className="section-title">Tools of the trade.</h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="tag hover:-translate-y-1"
              style={{
                padding: "8px 20px",
                fontSize: "14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
