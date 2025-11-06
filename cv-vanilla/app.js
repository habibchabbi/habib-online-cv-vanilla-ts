const navItems = [
  { label: 'About', target: '#hero' },
  { label: 'Skills', target: '#skills' },
  { label: 'Experience', target: '#experience' },
  { label: 'Projects', target: '#projects' },
  { label: 'Education', target: '#education' },
  { label: 'Contact', target: '#contact' },
];

const heroData = {
  summary:
    'I craft resilient, accessible user interfaces backed by design systems, testing strategies, and developer tooling that empower product teams to move fast confidently.',
  chips: ['Design Systems', 'Accessibility', 'DX Leadership', 'Performance'],
  stats: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Products Launched', value: '25' },
    { label: 'Teams Enabled', value: '12' },
  ],
};

const skillGroups = [
  {
    name: 'Languages',
    description: 'Typed JavaScript-first delivery with modern tooling and strict quality gates.',
    category: 'languages',
    stack: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'GraphQL'],
  },
  {
    name: 'Frameworks',
    description:
      'Production expertise across React, Next.js, and Remix with a11y-first rendering strategies.',
    category: 'frameworks',
    stack: ['React', 'Next.js', 'Remix', 'Astro', 'Node.js'],
  },
  {
    name: 'Design Systems',
    description: 'Comprehensive systems work: tokens, theming, component APIs, documentation.',
    category: 'design-systems',
    stack: ['Storybook', 'Chromatic', 'Radix', 'Tailwind', 'Framer'],
  },
  {
    name: 'Tooling',
    description: 'DX improvements with automated testing, CI/CD pipelines, and code quality gates.',
    category: 'tooling',
    stack: ['Nx', 'Vite', 'Vitest', 'Testing Library', 'Playwright'],
  },
];

const experiences = [
  {
    title: 'Lead Front-end Engineer · Heetch',
    period: '2021 — Present · Paris & Remote',
    description:
      'Scaled the Heetch design system to support 7 product squads, improving accessibility and delivery cadence across platforms.',
    highlights: ['Design system leadership', 'Accessibility governance', 'Team mentorship'],
  },
  {
    title: 'Senior UI Engineer · Mindsay',
    period: '2018 — 2021 · Paris',
    description:
      'Delivered conversational AI interfaces with real-time dashboards, doubling adoption for enterprise customers.',
    highlights: ['Realtime dashboards', 'Next.js performance', 'Automation'],
  },
  {
    title: 'Front-end Engineer · Botify',
    period: '2015 — 2018 · Paris',
    description:
      'Created SEO analytics workflows and component libraries powering the Botify product ecosystem.',
    highlights: ['Data visualization', 'Component libraries', 'CI tooling'],
  },
];

const projects = [
  {
    name: 'Orbit UI System',
    role: 'Lead Developer',
    type: 'Design System',
    description:
      'Cross-platform token pipeline, docs site, and accessibility testing suite powering Heetch products.',
    links: [
      { label: 'Case Study', href: 'https://example.com/orbit-ui' },
      { label: 'Docs', href: 'https://example.com/orbit-docs' },
    ],
    tags: ['Design Tokens', 'Storybook', 'Accessibility'],
  },
  {
    name: 'Conversational Insights',
    role: 'Senior Front-end',
    type: 'Analytics Platform',
    description:
      'Realtime analytics dashboard for customer support automation with advanced filtering and theming.',
    links: [{ label: 'Presentation', href: 'https://example.com/insights' }],
    tags: ['Next.js', 'Realtime', 'Data Viz'],
  },
  {
    name: 'Habib CV',
    role: 'Creator',
    type: 'Personal',
    description:
      'Living resume that highlights engineering craftsmanship, mentorship, and community impact.',
    links: [{ label: 'Source', href: 'https://github.com' }],
    tags: ['Vanilla JS', 'CSS', 'Accessibility'],
  },
];

const education = [
  {
    title: 'Master of Computer Science',
    period: '2012 — 2014 · University of Oran',
    description: 'Specialized in software engineering and human-computer interaction.',
    highlights: ['Human Computer Interaction', 'Distributed Systems', 'UX Research'],
  },
  {
    title: 'Continuous Learning',
    period: '2015 — Present',
    description: 'Conference speaking, OSS contributions, and mentoring bootcamp cohorts.',
    highlights: ['React Europe Speaker', 'OSS Maintainer', 'Mentor @ Frontend Masters'],
  },
];

const contactDetails = {
  email: 'contact@habib.dev',
  phone: '+33 6 00 00 00 00',
  location: 'Paris, France · Remote friendly',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/habib' },
    { label: 'GitHub', href: 'https://github.com/habib' },
    { label: 'Twitter', href: 'https://twitter.com/habibcodes' },
  ],
};

const footerLinks = [
  { label: 'Blog', href: 'https://habib.dev/blog' },
  { label: 'Speaking', href: 'https://habib.dev/speaking' },
  { label: 'Newsletter', href: 'https://habib.dev/newsletter' },
];

const filters = [{ id: 'all', label: 'All Skills' }, ...skillGroups.map((group) => ({
  id: group.category,
  label: group.name,
}))];

const themeKey = 'habib-cv-theme';

function select(selector, scope = document) {
  const node = scope.querySelector(selector);
  if (!node) throw new Error(`Missing element for selector: ${selector}`);
  return node;
}

function createNav() {
  const list = select('#nav-list');
  const fragment = document.createDocumentFragment();

  navItems.forEach(({ label, target }) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = target;
    link.textContent = label;
    link.className = 'site-nav__link';
    link.dataset.target = target;
    li.append(link);
    fragment.append(li);
  });

  list.append(fragment);
}

function renderHero() {
  select('#hero-summary').textContent = heroData.summary;

  const chips = select('#hero-chips');
  chips.innerHTML = '';
  heroData.chips.forEach((label) => {
    const chip = document.createElement('span');
    chip.className = 'hero__chip';
    chip.textContent = label;
    chips.append(chip);
  });

  const stats = select('#hero-stats');
  stats.innerHTML = '';
  heroData.stats.forEach(({ label, value }) => {
    const item = document.createElement('li');
    item.className = 'hero__stat';
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    const valueSpan = document.createElement('span');
    valueSpan.textContent = value;
    item.append(labelSpan, valueSpan);
    stats.append(item);
  });
}

function renderSkillFilters(activeFilter) {
  const container = select('#skills-filters');
  container.innerHTML = '';

  filters.forEach((filter) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.textContent = filter.label;
    button.dataset.filter = filter.id;
    if (filter.id === activeFilter) {
      button.classList.add('is-active');
    }
    container.append(button);
  });
}

function renderSkills(activeFilter) {
  const grid = select('#skills-grid');
  const template = select('#skill-card-template');
  grid.innerHTML = '';

  const activeGroups =
    activeFilter === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeFilter);

  const fragment = document.createDocumentFragment();

  activeGroups.forEach((group) => {
    const card = template.content.firstElementChild.cloneNode(true);
    select('.card__title', card).textContent = group.name;
    select('.card__meta', card).textContent = group.category.replace('-', ' ');
    select('.card__body', card).textContent = group.description;

    const tags = select('.card__tags', card);
    group.stack.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      tags.append(li);
    });

    fragment.append(card);
  });

  grid.append(fragment);
}

function renderTimeline(items, containerSelector) {
  const container = select(containerSelector);
  container.innerHTML = '';
  const template = select('#timeline-item-template');

  items.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    select('.timeline-item__title', node).textContent = item.title;
    select('.timeline-item__meta', node).textContent = item.period;
    select('.timeline-item__description', node).textContent = item.description;

    const tags = select('.timeline-item__tags', node);
    item.highlights.forEach((highlight) => {
      const li = document.createElement('li');
      li.textContent = highlight;
      tags.append(li);
    });

    container.append(node);
  });
}

function renderProjects() {
  const grid = select('#projects-grid');
  grid.innerHTML = '';
  const template = select('#project-card-template');

  projects.forEach((project) => {
    const card = template.content.firstElementChild.cloneNode(true);
    select('.card__title', card).textContent = project.name;
    select('.card__subtitle', card).textContent = project.role;
    select('.card__meta', card).textContent = project.type;
    select('.card__body', card).textContent = project.description;

    const tags = select('.card__tags', card);
    project.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      tags.append(li);
    });

    const actions = select('.card__actions', card);
    project.links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      actions.append(anchor);
    });

    grid.append(card);
  });
}

function renderContact() {
  const card = select('#contact-card');
  card.innerHTML = '';

  const items = [
    { label: 'Email', value: contactDetails.email, action: 'copy-email' },
    { label: 'Phone', value: contactDetails.phone, action: 'copy-phone' },
    { label: 'Location', value: contactDetails.location },
  ];

  items.forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'contact-card__item';

    const label = document.createElement('span');
    label.className = 'contact-card__label';
    label.textContent = item.label;

    const value = document.createElement('span');
    value.className = 'contact-card__value';
    value.textContent = item.value;

    wrapper.append(label, value);

    if (item.action) {
      const actions = document.createElement('div');
      actions.className = 'contact-card__actions';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill-button pill-button--ghost';
      button.dataset.action = item.action;
      button.textContent = item.action === 'copy-email' ? 'Copy email' : 'Copy phone';
      actions.append(button);

      if (item.action === 'copy-email') {
        const open = document.createElement('button');
        open.type = 'button';
        open.className = 'pill-button pill-button--ghost';
        open.dataset.action = 'open-email';
        open.textContent = 'Start email';
        actions.append(open);
      }

      wrapper.append(actions);
    }

    card.append(wrapper);
  });

  const socials = document.createElement('div');
  socials.className = 'contact-card__actions';
  contactDetails.socials.forEach((social) => {
    const anchor = document.createElement('a');
    anchor.href = social.href;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.className = 'pill-button pill-button--ghost';
    anchor.textContent = social.label;
    socials.append(anchor);
  });
  card.append(socials);
}

function renderFooter() {
  const container = select('#footer-links');
  footerLinks.forEach((link) => {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = link.label;
    container.append(anchor);
  });
}

function initializeTheme() {
  const stored = localStorage.getItem(themeKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored ?? (prefersDark ? 'dark' : 'light');
  applyTheme(initial);
}

function applyTheme(mode) {
  const root = document.documentElement;
  root.dataset.theme = mode;
  localStorage.setItem(themeKey, mode);
  document.body.setAttribute('data-theme', mode);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function handleSkillFiltering() {
  let activeFilter = 'all';

  renderSkillFilters(activeFilter);
  renderSkills(activeFilter);

  select('#skills-filters').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderSkillFilters(activeFilter);
    renderSkills(activeFilter);
  });
}

function handleContactActions() {
  select('#contact-card').addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const action = button.dataset.action;
    try {
      if (action === 'copy-email') {
        await navigator.clipboard.writeText(contactDetails.email);
        button.textContent = 'Copied!';
        setTimeout(() => (button.textContent = 'Copy email'), 1500);
      } else if (action === 'copy-phone') {
        await navigator.clipboard.writeText(contactDetails.phone);
        button.textContent = 'Copied!';
        setTimeout(() => (button.textContent = 'Copy phone'), 1500);
      } else if (action === 'open-email') {
        window.location.href = `mailto:${contactDetails.email}?subject=Project%20collaboration`;
      }
    } catch (error) {
      console.error(error);
      button.textContent = 'Unable to copy';
      setTimeout(() => {
        button.textContent = action === 'copy-email' ? 'Copy email' : 'Copy phone';
      }, 1500);
    }
  });
}

function handleFormSubmission() {
  select('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = select('#form-feedback');
    feedback.textContent = 'Sending…';

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData.entries());

    window.setTimeout(() => {
      feedback.textContent = `Merci ${payload.name}! I will reach out at ${payload.email}.`;
      event.target.reset();
    }, 750);
  });
}

function setupNavInteractions() {
  const nav = select('.site-nav');
  const navToggle = select('.nav-toggle');

  const syncExpanded = () => {
    const isOpen = nav.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    syncExpanded();
  });

  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    nav.classList.remove('is-open');
    syncExpanded();
  });

  syncExpanded();
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = `#${entry.target.id}`;
        const link = document.querySelector(`.site-nav__link[data-target="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          document
            .querySelectorAll('.site-nav__link[aria-current="page"]')
            .forEach((active) => active.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'page');
        }
      });
    },
    { rootMargin: '-50% 0px -49% 0px' }
  );

  document.querySelectorAll('[data-section]').forEach((section) => observer.observe(section));
}

function enhanceScroll() {
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-hidden');
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    section.classList.add('is-hidden');
    revealObserver.observe(section);
  });
}

function handleDownload() {
  select('#download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://habib.dev/cv.pdf';
    link.download = 'Habib-Ait-Abderrahmane-CV.pdf';
    link.click();
  });
}

function setupThemeToggle() {
  select('#theme-toggle').addEventListener('click', toggleTheme);
}

function ready() {
  createNav();
  const firstNav = document.querySelector('.site-nav__link');
  if (firstNav) firstNav.setAttribute('aria-current', 'page');
  renderHero();
  renderTimeline(experiences, '#experience-timeline');
  renderProjects();
  renderTimeline(education, '#education-timeline');
  renderContact();
  renderFooter();

  initializeTheme();
  setupThemeToggle();
  handleDownload();
  handleSkillFiltering();
  handleContactActions();
  handleFormSubmission();
  setupNavInteractions();
  observeSections();
  enhanceScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}
