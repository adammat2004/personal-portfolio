import Image from "next/image";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    title: "Product & frontend",
    items: "React, Next.js, React Native, TypeScript, responsive UI",
  },
  {
    title: "Backend & data",
    items: "Node.js, NestJS, Express, Prisma, MongoDB, PostgreSQL, SQL",
  },
  {
    title: "AI & data science",
    items: "AI model integrations, embeddings, Python, Pandas, Scikit-learn",
  },
  {
    title: "Engineering practice",
    items: "Git, automated testing, Docker, Scrum, code review, Stripe",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="site-shell">
        <SectionHeading index="03 / About">
          Curious about the system. Focused on the <em>person using it.</em>
        </SectionHeading>

        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <Image
                src="/me.jpg"
                alt="Adam playing Gaelic football"
                width={1965}
                height={2048}
                sizes="(max-width: 720px) 90vw, 30vw"
              />
            </div>
            <p className="photo-caption">
              Away from the keyboard: Gaelic football, running and fitness.
            </p>
          </div>

          <div className="about-copy">
            <p className="about-intro">
              I&apos;m a Computer Science student and product-focused software
              engineer who likes taking an idea from an ambiguous problem to a
              working, useful system.
            </p>
            <p>
              My experience spans enterprise engineering at Workday and
              independently building Tradeez across product strategy, interface
              design, APIs, databases, payments and AI-assisted workflows.
              I&apos;m especially interested in the point where strong backend
              foundations meet a simple user experience.
            </p>
            <p>
              I&apos;m looking for a graduate team where I can keep learning,
              contribute across the stack and build software that solves a
              genuine operational or customer problem.
            </p>

            <div className="education-card">
              <div>
                <strong>BSc Computer Science</strong>
                <span>Dublin City University · Entering final year</span>
              </div>
              <div className="education-year">
                <strong>2027</strong>
                <span>Expected graduation</span>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
