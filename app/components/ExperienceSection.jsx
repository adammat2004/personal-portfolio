import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section section-rule">
      <div className="site-shell">
        <SectionHeading index="01 / Experience">
          Production experience in enterprise <em>software engineering.</em>
        </SectionHeading>

        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-meta">
              <p>Mar — Aug 2026</p>
              <p>Dublin, Ireland</p>
              <span className="status-pill">
                <span className="availability-dot" aria-hidden="true" />
                Current
              </span>
            </div>

            <div>
              <h3 className="experience-role">
                Software Development Engineer Intern
              </h3>
              <p className="experience-org">
                Workday · Time Management Engineering
              </p>
              <p className="experience-summary">
                Working with the Time Keepers team on enterprise features for
                scheduled and unscheduled working days, contributing production
                changes and automated test coverage within a Scrum engineering
                team.
              </p>
              <ul className="achievement-list">
                <li>
                  Developed automated tests in WATS across permissions, system
                  configurations and complex user scenarios.
                </li>
                <li>
                  Implemented XO production changes, investigated Jira tickets
                  and reproduced defects using representative test data.
                </li>
                <li>
                  Contributed code reviewed and merged into Workday&apos;s main
                  codebase, alongside pair programming and code review.
                </li>
                <li>
                  Completed Workday&apos;s internal XO and WATS engineering
                  training programmes.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
