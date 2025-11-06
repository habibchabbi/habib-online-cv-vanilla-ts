import { injectPartials } from './partials.js';
import { renderContent } from './render.js';
import { activateSkillFiltering, animateSkillMeters, setupNavHighlighting, setupNavToggle, setupScrollTop } from './interactions.js';
import { initializeThemeToggle } from './theme.js';

async function init() {
  initializeThemeToggle();

  try {
    await injectPartials();
  } catch (error) {
    console.error('Failed to load partials', error);
    return;
  }

  renderContent();
  activateSkillFiltering();
  animateSkillMeters();
  setupNavHighlighting();
  setupNavToggle();
  setupScrollTop();
}

document.addEventListener('DOMContentLoaded', () => {
  init().catch((error) => {
    console.error('Failed to initialize the CV experience', error);
  });
});
