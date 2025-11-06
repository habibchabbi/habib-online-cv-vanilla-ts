import { $, $$ } from './dom.js';

export function activateSkillFiltering() {
  const buttons = $$('[data-skill-filter]');
  const skillCards = $$('[data-skill-list] .skill-pill');
  if (!buttons.length || !skillCards.length) return;

  function setActive(category) {
    buttons.forEach((button) => {
      const isActive =
        button.dataset.skillFilter === category || (category === 'all' && button.dataset.skillFilter === 'all');
      button.classList.toggle('chip--active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    skillCards.forEach((card) => {
      const shouldShow = category === 'all' || card.dataset.category === category;
      card.style.display = shouldShow ? '' : 'none';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.skillFilter || 'all';
      setActive(category);
    });
  });

  setActive('all');
}

export function animateSkillMeters() {
  const meters = $$('[data-progress]');
  if (!meters.length) return;

  const reveal = (el) => {
    const progress = Number(el.dataset.progress || '0');
    const scale = Number.isFinite(progress) ? Math.min(Math.max(progress, 0), 100) / 100 : 0;
    el.style.transform = `scaleX(${scale})`;
  };

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.4 }
    );

    meters.forEach((meter) => {
      meter.style.transform = 'scaleX(0)';
      observer.observe(meter);
    });
  } else {
    meters.forEach(reveal);
  }
}

export function setupNavHighlighting() {
  const sections = $$('section[data-section]');
  const navLinks = $$('[data-nav-link]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

export function setupNavToggle() {
  const toggle = $('[data-nav-toggle]');
  const list = $('#site-nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.classList.toggle('is-open', isOpen);
  });

  $$('[data-nav-link]').forEach((link) =>
    link.addEventListener('click', () => {
      list.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
    })
  );
}

export function setupScrollTop() {
  const button = $('[data-scroll-top]');
  if (!button) return;

  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const onScroll = () => {
    const isVisible = window.scrollY > 480;
    button.classList.toggle('is-visible', isVisible);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
