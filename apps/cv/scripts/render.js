import { profile, skillFilters, skills, experience, projects, education, contact } from './data.js';
import { $, $$ } from './dom.js';

function renderHeroSummary() {
  const summary = $('[data-hero-summary]');
  if (summary) {
    summary.textContent = profile.summary;
  }
}

function renderHeroMetrics() {
  const metricsContainer = $('.hero-card__metrics');
  if (!metricsContainer) return;

  metricsContainer.innerHTML = '';
  profile.metrics.forEach(({ value, label }) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="metric__value">${value}</span>
      <span class="metric__label">${label}</span>
    `;
    metricsContainer.appendChild(item);
  });
}

function renderSkillFilters() {
  const container = $('[data-skill-filters]');
  if (!container) return;

  container.innerHTML = '';
  skillFilters.forEach(({ id, label }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.dataset.skillFilter = id;
    button.textContent = label;
    button.setAttribute('aria-pressed', 'false');
    container.appendChild(button);
  });
}

function renderSkills() {
  const list = $('[data-skill-list]');
  if (!list) return;

  list.innerHTML = '';
  const fragment = document.createDocumentFragment();
  skills.forEach((skill) => {
    const item = document.createElement('li');
    item.className = 'skill-pill';
    item.dataset.category = skill.category;

    const header = document.createElement('div');
    header.className = 'skill-pill__header';

    const title = document.createElement('span');
    title.className = 'skill-pill__title';
    title.textContent = skill.name;

    const level = document.createElement('span');
    level.className = 'skill-pill__level';
    level.textContent = skill.descriptor;

    header.append(title, level);

    const meter = document.createElement('div');
    meter.className = 'skill-pill__meter';
    meter.setAttribute('role', 'presentation');

    const meterFill = document.createElement('span');
    meterFill.dataset.progress = String(skill.level);
    meterFill.style.transform = 'scaleX(0)';

    meter.append(meterFill);
    item.append(header, meter);
    fragment.appendChild(item);
  });
  list.appendChild(fragment);
}

function renderExperience() {
  const container = $('[data-experience-list]');
  if (!container) return;

  container.innerHTML = '';
  experience.forEach((entry) => {
    const article = document.createElement('article');
    article.className = 'timeline__item';
    article.innerHTML = `
      <h3>${entry.role} · ${entry.company}</h3>
      <div class="timeline__meta">
        <span><strong>${entry.period}</strong></span>
        <span>${entry.location}</span>
      </div>
      <ul class="timeline__bullets">
        ${entry.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
      </ul>
    `;
    container.appendChild(article);
  });
}

function renderProjects() {
  const container = $('[data-project-list]');
  if (!container) return;

  container.innerHTML = '';
  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <div>
        <h3 class="card__title">${project.name}</h3>
        <p class="card__subtitle">${project.role}</p>
        <p>${project.summary}</p>
      </div>
      <div class="card__tags">
        ${project.tech.map((tag) => `<span class="card__tag">${tag}</span>`).join('')}
      </div>
      <a class="button button--ghost" href="${project.link}" target="_blank" rel="noopener">Visit project</a>
    `;
    container.appendChild(article);
  });
}

function renderEducation() {
  const container = $('[data-education-list]');
  if (!container) return;

  container.innerHTML = '';
  education.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'education__item';
    article.innerHTML = `
      <h3>${item.title}</h3>
      <p class="education__meta">${item.school} · ${item.period}</p>
      <p>${item.notes}</p>
    `;
    container.appendChild(article);
  });
}

function renderContact() {
  const wrapper = $('[data-contact]');
  if (!wrapper) return;

  const phoneHref = contact.phone.replace(/[^+\d]/g, '');
  wrapper.innerHTML = `
    <div class="contact__grid">
      <div class="contact__item">
        <h3>Email</h3>
        <p><a href="mailto:${contact.email}">${contact.email}</a></p>
      </div>
      <div class="contact__item">
        <h3>Phone</h3>
        <p><a href="tel:${phoneHref}">${contact.phone}</a></p>
      </div>
      <div class="contact__item">
        <h3>Location</h3>
        <p>${contact.location}</p>
      </div>
    </div>
    <div>
      <h3>More places</h3>
      <div class="contact__links">
        ${contact.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join('')}
      </div>
    </div>
  `;
}

export function setCurrentYear() {
  const yearNode = $('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

export function renderContent() {
  renderHeroSummary();
  renderHeroMetrics();
  renderSkillFilters();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();
  setCurrentYear();
}
