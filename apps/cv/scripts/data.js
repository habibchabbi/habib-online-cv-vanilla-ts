export const profile = {
  summary:
    'Product-minded frontend engineer with a knack for simplifying complex journeys and building design systems that scale across squads.',
  metrics: [
    {
      value: '24%',
      label: 'Average performance lift on recent projects',
    },
    {
      value: '15',
      label: 'Design system kits launched',
    },
  ],
};

export const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'design', label: 'Design systems' },
  { id: 'tooling', label: 'Tooling' },
  { id: 'leadership', label: 'Leadership' },
];

export const skills = [
  {
    name: 'TypeScript',
    level: 92,
    category: 'frontend',
    descriptor: 'Expert',
  },
  {
    name: 'React & Next.js',
    level: 90,
    category: 'frontend',
    descriptor: 'Expert',
  },
  {
    name: 'HTML & Accessibility',
    level: 96,
    category: 'frontend',
    descriptor: 'Expert',
  },
  {
    name: 'CSS Architecture',
    level: 94,
    category: 'frontend',
    descriptor: 'Expert',
  },
  {
    name: 'Design System Ops',
    level: 89,
    category: 'design',
    descriptor: 'Specialist',
  },
  {
    name: 'Component Libraries',
    level: 90,
    category: 'design',
    descriptor: 'Specialist',
  },
  {
    name: 'Node.js Tooling',
    level: 78,
    category: 'tooling',
    descriptor: 'Advanced',
  },
  {
    name: 'Vite & Build Tooling',
    level: 84,
    category: 'tooling',
    descriptor: 'Advanced',
  },
  {
    name: 'DX Workshops',
    level: 80,
    category: 'leadership',
    descriptor: 'Advanced',
  },
  {
    name: 'Mentorship & Coaching',
    level: 88,
    category: 'leadership',
    descriptor: 'Specialist',
  },
  {
    name: 'Product Discovery',
    level: 76,
    category: 'leadership',
    descriptor: 'Advanced',
  },
  {
    name: 'Testing Library',
    level: 82,
    category: 'tooling',
    descriptor: 'Advanced',
  },
];

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'ScaleFin',
    period: '2022 — Present',
    location: 'Remote, Lagos & Amsterdam',
    highlights: [
      'Led the launch of a modular design system adopted by five product lines within six months.',
      'Introduced accessibility scorecards that improved WCAG compliance from 62% to 93%.',
      'Partnered with data science to build real-time dashboards, cutting analyst turnaround by 38%.',
    ],
  },
  {
    role: 'Product Engineer',
    company: 'Nova Bank',
    period: '2018 — 2022',
    location: 'Lagos, Nigeria',
    highlights: [
      'Architected a mobile-first web app that now serves 2M+ customers with sub-second interactions.',
      'Mentored six engineers through cross-functional pairing and quarterly growth plans.',
      'Refined CI/CD pipelines, reducing build times from 14 minutes to under 5 minutes.',
    ],
  },
  {
    role: 'UI Engineer',
    company: 'BrightLoop Studios',
    period: '2013 — 2018',
    location: 'Lagos, Nigeria',
    highlights: [
      'Collaborated with designers to ship animation-driven landing pages for Fortune 500 clients.',
      'Rebuilt legacy PHP dashboards using modern JavaScript and improved conversions by 21%.',
      'Championed code review practices that increased release confidence and knowledge sharing.',
    ],
  },
];

export const projects = [
  {
    name: 'Regulus Design System',
    summary: 'A token-driven design system powering internal analytics tools and external partner portals.',
    role: 'Design system lead',
    tech: ['TypeScript', 'Storybook', 'Stitches', 'Figma Tokens'],
    link: 'https://example.com/regulus',
  },
  {
    name: 'FlowBoard Operations Suite',
    summary: 'Composable dashboards with live telemetry for fintech operations teams.',
    role: 'Frontend architect',
    tech: ['Next.js', 'RxJS', 'Nx', 'Playwright'],
    link: 'https://example.com/flowboard',
  },
  {
    name: 'Insight Loop',
    summary: 'AI-assisted customer research portal streamlining qualitative feedback loops.',
    role: 'Product engineer',
    tech: ['Remix', 'TypeScript', 'PostgreSQL', 'Redis'],
    link: 'https://example.com/insightloop',
  },
];

export const education = [
  {
    title: 'BSc. Computer Science',
    school: 'University of Lagos',
    period: '2010 — 2014',
    notes: 'Graduated with honours. Final project focused on performance benchmarking progressive web apps.',
  },
  {
    title: 'Certified Web Accessibility Specialist (CWAS)',
    school: 'IAAP',
    period: '2021',
    notes: 'Proved capabilities in accessibility audits, inclusive design patterns, and remediation planning.',
  },
];

export const contact = {
  email: 'hello@habib.codes',
  phone: '+234 810 000 0000',
  location: 'Lagos, Nigeria (open to remote engagements)',
  links: [
    { label: 'Portfolio', url: 'https://habib.codes' },
    { label: 'GitHub', url: 'https://github.com/oghenehabib' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/oghenehabib' },
    { label: 'Resume (PDF)', url: 'https://example.com/habib-resume.pdf' },
  ],
};
