export const partialFallbacks = {
  header: `
    <div class="site-header__inner">
      <div class="identity">
        <div class="identity__badge" aria-hidden="true">HO</div>
        <div>
          <p class="identity__title">Habib Ogheneyoma</p>
          <p class="identity__subtitle">Frontend Engineer</p>
        </div>
      </div>
      <nav class="site-nav" aria-label="Primary">
        <button class="site-nav__toggle" type="button" aria-expanded="false" aria-controls="site-nav-list" data-nav-toggle>
          <span class="site-nav__toggle-bar" aria-hidden="true"></span>
          <span class="site-nav__toggle-bar" aria-hidden="true"></span>
          <span class="site-nav__toggle-bar" aria-hidden="true"></span>
          <span class="site-nav__toggle-label">Menu</span>
        </button>
        <ul class="site-nav__list" id="site-nav-list">
          <li><a href="#about" data-nav-link>About</a></li>
          <li><a href="#skills" data-nav-link>Skills</a></li>
          <li><a href="#experience" data-nav-link>Experience</a></li>
          <li><a href="#projects" data-nav-link>Projects</a></li>
          <li><a href="#education" data-nav-link>Education</a></li>
          <li><a href="#contact" data-nav-link>Contact</a></li>
        </ul>
      </nav>
    </div>
  `,
  hero: `
    <div class="section__inner">
      <div class="hero">
        <div class="hero__intro">
          <p class="hero__eyebrow">Currently crafting product experiences at ScaleFin</p>
          <h1 class="hero__title">Building interfaces that feel considered, inclusive, and fast.</h1>
          <p class="hero__summary" data-hero-summary>
            I turn complex requirements into accessible, performant interfaces. My focus is on maintainable architectures, inclusive experiences, and close collaboration with product teams.
          </p>
          <div class="hero__actions" data-hero-actions>
            <a class="button" href="#projects">View projects</a>
            <a class="button button--ghost" href="#contact">Let's collaborate</a>
          </div>
          <dl class="hero__details">
            <div>
              <dt>Location</dt>
              <dd>Lagos, Nigeria</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Open to senior frontend roles, hybrid or remote</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Design systems, complex dashboards, thoughtful DX</dd>
            </div>
          </dl>
        </div>
        <div class="hero__aside">
          <div class="hero-card" role="presentation">
            <div class="hero-card__ring"></div>
            <div class="hero-card__body">
              <p>11+ years building for the web, mentoring teams, and investing in consistent UI systems.</p>
              <ul class="hero-card__metrics"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  skills: `
    <div class="section__inner">
      <header class="section__header">
        <h2>Skills spotlight</h2>
        <p>A blend of product sense, UI engineering, and tooling expertise.</p>
      </header>
      <div class="skills" data-skill-cloud>
        <div class="skills__filters" role="group" aria-label="Filter skills by discipline" data-skill-filters></div>
        <ul class="skills__list" data-skill-list></ul>
      </div>
    </div>
  `,
  experience: `
    <div class="section__inner">
      <header class="section__header">
        <h2>Experience</h2>
        <p>Meaningful work delivered alongside ambitious teams.</p>
      </header>
      <div class="timeline" data-experience-list></div>
    </div>
  `,
  projects: `
    <div class="section__inner">
      <header class="section__header">
        <h2>Selected projects</h2>
        <p>A snapshot of recent, high-impact deliverables.</p>
      </header>
      <div class="cards" data-project-list></div>
    </div>
  `,
  education: `
    <div class="section__inner section__inner--narrow">
      <header class="section__header">
        <h2>Education &amp; Certifications</h2>
      </header>
      <div class="education" data-education-list></div>
    </div>
  `,
  contact: `
    <div class="section__inner section__inner--narrow">
      <header class="section__header">
        <h2>Let's build together</h2>
        <p>Send a note or schedule a chat to explore how I can help your team deliver.</p>
      </header>
      <div class="contact" data-contact></div>
    </div>
  `,
  footer: `
    <div class="site-footer__inner">
      <p>&copy; <span data-year></span> Habib Ogheneyoma. Built with semantic HTML, accessible interactions, and a dash of vanilla JS.</p>
      <a class="site-footer__link" href="#top">Back to top</a>
    </div>
  `,
};
