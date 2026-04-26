import './App.css'
import {
  clientList,
  experience,
  extras,
  focusAreas,
  heroMetrics,
  navigation,
  principles,
  profile,
  projectStories,
  stackGroups,
} from './content'

function App() {
  const emailHref = `mailto:${profile.email}?subject=Portfolio%20Inquiry`

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kumar Aditya home">
          <span>K</span>
          <span>A</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-link" href={emailHref}>
          Start a conversation
        </a>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-copy fade-up">
            <p className="eyebrow">{profile.role}</p>
            <h1>
              {profile.name}
              <span>{profile.headline}</span>
            </h1>
            <p className="hero-summary">{profile.summary}</p>
            <p className="hero-subsummary">{profile.subsummary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let&apos;s build something useful
              </a>
              <a
                className="button button-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>

            <ul className="hero-metrics" aria-label="Highlights">
              {heroMetrics.map((metric, index) => (
                <li
                  key={metric.label}
                  className="metric-card fade-up"
                  style={{ animationDelay: `${index * 90 + 120}ms` }}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel fade-up delay-2">
            <div className="panel-orbit panel-orbit-one" aria-hidden="true" />
            <div className="panel-orbit panel-orbit-two" aria-hidden="true" />
            <p className="panel-label">Trusted in high-context environments</p>

            <div className="company-cloud" aria-label="Client environments">
              {clientList.map((company) => (
                <span key={company}>{company}</span>
              ))}
            </div>

            <div className="insight-card">
              <p>What teams usually bring me in for</p>
              <ul>
                <li>Early discovery and technical shaping</li>
                <li>Fast proof-of-concept work that creates alignment</li>
                <li>Modernization efforts that need delivery credibility</li>
              </ul>
            </div>

            <div className="signal-strip">
              <div>
                <span>Primary stack</span>
                <strong>React, React Native, Node.js, Go</strong>
              </div>
              <div>
                <span>Operating mode</span>
                <strong>Advisory, architecture, hands-on delivery</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="impact">
          <div className="section-heading fade-up">
            <p className="eyebrow">What I bring</p>
            <h2>Business context, technical clarity, and shipping energy.</h2>
            <p>
              The common thread in my work is helping teams move from ambiguity
              to confident execution without losing sight of scale, usability,
              or stakeholder trust.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="focus-card fade-up"
                style={{ animationDelay: `${index * 90 + 80}ms` }}
              >
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>

          <div className="principles-card fade-up delay-2">
            <div>
              <p className="eyebrow">How I work</p>
              <h3>My approach stays practical even when the problem is messy.</h3>
            </div>
            <ul className="principles-list">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <div className="section-heading fade-up">
            <p className="eyebrow">Experience</p>
            <h2>A path shaped by enterprise delivery and product thinking.</h2>
            <p>
              I have spent my career moving between engineering depth and
              solution-facing leadership, which is why I am comfortable both in
              architecture conversations and inside the code.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className="timeline-item fade-up"
                style={{ animationDelay: `${index * 110 + 90}ms` }}
              >
                <div className="timeline-period">
                  <span className="timeline-dot" aria-hidden="true" />
                  <p>{item.period}</p>
                </div>

                <div className="timeline-card">
                  <p className="timeline-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="detail-list">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading fade-up">
            <p className="eyebrow">Selected work</p>
            <h2>Programs and products where I helped turn motion into progress.</h2>
            <p>
              These snapshots reflect the kind of environments I work best in:
              high stakes, cross-functional, and often still being defined while
              the team needs to move.
            </p>
          </div>

          <div className="project-grid">
            {projectStories.map((project, index) => (
              <article
                key={project.title}
                className="project-card fade-up"
                style={{ animationDelay: `${index * 90 + 70}ms` }}
              >
                <div className="project-topline">
                  <p className="project-kicker">Case {index + 1}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.blurb}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="stack-panel fade-up delay-2">
            <div className="section-heading stack-heading">
              <p className="eyebrow">Tooling range</p>
              <h2>Enough technical depth to shape and support real delivery.</h2>
            </div>

            <div className="stack-grid">
              {stackGroups.map((group) => (
                <article key={group.title} className="stack-card">
                  <h3>{group.title}</h3>
                  <ul className="stack-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card fade-up">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Need someone who can bridge strategy and execution?</h2>
              <p className="contact-copy">
                If your team needs clearer discovery, sharper prototypes, or a
                stronger path from requirements to shipped product, I would be
                glad to talk.
              </p>
            </div>

            <div className="contact-links">
              <a className="button button-primary" href={emailHref}>
                Email me
              </a>
              <a
                className="button button-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>

            <div className="contact-meta">
              <div>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>Working style</span>
                <strong>Collaborative, product-minded, delivery-focused</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Built in React with a Vercel-friendly setup and shaped from Kumar
          Aditya&apos;s experience in solutions engineering and delivery.
        </p>
        <ul>
          {extras.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

export default App
