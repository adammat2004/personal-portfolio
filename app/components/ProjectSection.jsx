import Link from "next/link";
import SectionHeading from "./SectionHeading";

const supportingProjects = [
  {
    type: "Machine learning",
    title: "Used Car Price Prediction",
    description:
      "An end-to-end regression project exploring data preparation, feature engineering and model comparison to estimate used-car prices.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    url: "https://github.com/adammat2004/used-car-price-prediction",
    external: true,
  },
  {
    type: "Systems engineering",
    title: "Rust Key-Value Store",
    description:
      "A concurrent key-value store built to explore Rust, asynchronous programming and the foundations of networked storage systems.",
    tech: ["Rust", "Tokio", "Concurrency"],
    url: "https://github.com/adammat2004/rust-kv-store",
    external: true,
  },
  {
    type: "Frontend engineering",
    title: "Portfolio, reimagined",
    description:
      "A responsive, accessible portfolio built with a custom visual system to present experience and product work with clarity.",
    tech: ["Next.js", "React", "Responsive design"],
    url: "https://github.com/adammat2004/personal-portfolio",
    external: true,
  },
];

const ExternalAttributes = ({ external }) =>
  external ? { target: "_blank", rel: "noreferrer noopener" } : {};

const ProjectSection = () => {
  return (
    <section id="work" className="section projects-section">
      <div className="site-shell">
        <SectionHeading index="02 / Selected work">
          Selected projects across product, backend and <em>systems.</em>
        </SectionHeading>

        <article className="featured-project">
          <div className="featured-project-copy">
            <div>
              <p className="project-index">Featured case study · 01</p>
              <h3 className="project-name">Tradeez</h3>
              <p className="project-subtitle">
                An AI-native operating system for tradespeople.
              </p>
            </div>

            <div>
              <p className="project-lead">
                Most contractor software starts after a tradesperson already
                understands the job. Tradeez starts at the first customer
                interaction—using photos, videos and adaptive questions to
                create a structured picture of the work before a site visit.
              </p>

              <div className="project-insights">
                <div className="project-insight">
                  <strong>The problem</strong>
                  <span>
                    Enquiries arrive incomplete, quoting is repetitive, and
                    valuable job knowledge stays unstructured.
                  </span>
                </div>
                <div className="project-insight">
                  <strong>The product</strong>
                  <span>
                    Intelligent intake, job packets, assisted quoting and
                    connected customer, job and invoice workflows.
                  </span>
                </div>
                <div className="project-insight">
                  <strong>My role</strong>
                  <span>
                    Product strategy, UI design, full-stack engineering, AI
                    workflows, architecture, payments and deployment.
                  </span>
                </div>
                <div className="project-insight">
                  <strong>What&apos;s next</strong>
                  <span>
                    AI-assisted landscape visualisation, materials selection
                    and richer 2D and 3D planning tools.
                  </span>
                </div>
              </div>

              <ul className="tech-list" aria-label="Tradeez technologies">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Prisma",
                  "MongoDB",
                  "Stripe",
                  "AI integrations",
                ].map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-actions">
                <Link
                  className="button button-accent"
                  href="https://www.tradeez.ie"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit Tradeez <span className="arrow">↗</span>
                </Link>
                <Link
                  className="button button-outline-light"
                  href="https://github.com/adammat2004/tradies"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View code
                </Link>
              </div>
            </div>
          </div>

          <div className="product-flow" aria-label="Tradeez product workflow">
            <div className="product-flow-intro">
              <span>Core workflow</span>
              <p>
                Turning an incomplete customer enquiry into information a
                contractor can act on.
              </p>
            </div>
            <ol>
              <li>
                <span>01</span>
                <strong>Capture</strong>
                <p>Collect the job description, media and customer context.</p>
              </li>
              <li>
                <span>02</span>
                <strong>Understand</strong>
                <p>Use adaptive questions to fill gaps and structure the job.</p>
              </li>
              <li>
                <span>03</span>
                <strong>Act</strong>
                <p>Create a quote and move the work into delivery workflows.</p>
              </li>
            </ol>
          </div>
        </article>

        <div className="project-grid">
          {supportingProjects.map((project, index) => (
            <Link
              className="project-card"
              href={project.url}
              key={project.title}
              {...ExternalAttributes(project)}
            >
              <div className="project-card-top">
                <span className="project-card-type">
                  0{index + 2} · {project.type}
                </span>
                <span className="project-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-card-tech" aria-label="Technologies">
                  {project.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
