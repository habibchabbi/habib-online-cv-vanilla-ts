import { $$ } from './dom.js';
import { partialFallbacks } from './partials-fallback.js';

async function loadPartial(name) {
  const url = new URL(`../partials/${name}.html`, import.meta.url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load partial: ${name}`);
  }
  return response.text();
}

export async function injectPartials() {
  const containers = $$('[data-partial]');
  await Promise.all(
    containers.map(async (container) => {
      const name = container.dataset.partial;
      if (!name) return;

      try {
        const markup = await loadPartial(name);
        container.innerHTML = markup;
      } catch (error) {
        console.warn(`Falling back to inline partial for "${name}"`, error);
        const fallbackMarkup = partialFallbacks[name];
        if (fallbackMarkup) {
          container.innerHTML = fallbackMarkup;
        } else {
          container.innerHTML = '<p role="status">Content failed to load.</p>';
        }

      }
    })
  );
}
