import { $ } from './dom.js';

const STORAGE_KEY = 'habib-cv-theme';

function prefersDarkMode() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Unable to access theme preference storage.', error);
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Unable to persist theme preference.', error);
  }
}

function updateToggleIcon(button, theme) {
  const icon = button.querySelector('.theme-toggle__icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

export function initializeThemeToggle() {
  const button = $('[data-theme-toggle]');
  if (!button) return;

  const root = document.documentElement;
  const stored = getStoredTheme();
  const initial = stored || (prefersDarkMode() ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
  updateToggleIcon(button, initial);

  button.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateToggleIcon(button, next);
    saveTheme(next);
  });
}
