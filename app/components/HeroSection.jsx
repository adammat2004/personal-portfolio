import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="site-shell">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-eyebrow">Adam Matthews · Software Engineer</p>
            <h1 className="hero-title">
              Full-stack, backend and AI product development.
            </h1>
            <p className="hero-intro">
              I&apos;m a Computer Science student at Dublin City University and
              a Software Development Engineer Intern at Workday. I build
              complete software products, from APIs and data models to AI
              features and user-facing applications.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="#work">
                View selected work <span className="arrow">↗</span>
              </Link>
              <Link className="button button-light" href="#contact">
                Contact me
              </Link>
            </div>
          </div>

          <aside className="hero-summary" aria-label="Current profile">
            <p className="hero-summary-label">Current profile</p>
            <dl className="profile-list">
              <div>
                <dt>Experience</dt>
                <dd>
                  Software Development Engineer Intern
                  <span>Workday · Time Management</span>
                </dd>
              </div>
              <div>
                <dt>Independent work</dt>
                <dd>
                  Full-stack developer
                  <span>Tradeez · AI-assisted contractor software</span>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  BSc Computer Science
                  <span>Dublin City University · Graduating 2027</span>
                </dd>
              </div>
            </dl>
            <div className="hero-availability">
              <span className="availability-dot" aria-hidden="true" />
              Open to 2027 graduate roles
            </div>
          </aside>
        </div>

        <div className="hero-footer">
          <span>Dublin, Ireland</span>
          <span>Full-stack engineering</span>
          <span>Backend systems</span>
          <span>Applied AI</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
