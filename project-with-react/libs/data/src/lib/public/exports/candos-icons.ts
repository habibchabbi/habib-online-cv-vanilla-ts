const svgToDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

const experienceIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#eef2ff" />
  <path d="M22 12h20v8h6a8 8 0 0 1-6.6 7.9C40 35 34.4 40 32 40s-8-5-9.4-12.1A8 8 0 0 1 16 20h6z" fill="#4c1d95" />
  <circle cx="32" cy="22" r="6" fill="#facc15" />
  <path d="M26 42h12v4h4v2H22v-2h4z" fill="#1f2937" />
</svg>
`);

const angularIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#fff1f2" />
  <path d="M32 8 12 16l6 28 14 12 14-12 6-28z" fill="#ef4444" />
  <path d="M32 14.5 19.8 19.6 32 52l12.2-32.4z" fill="#be123c" />
  <path d="M32 25.5 26.6 40h4l1-3h6l1 3h4L38 25.5z" fill="#fee2e2" />
</svg>
`);

const javaSpringIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#ecfdf5" />
  <path d="M16 40c0 5.5 7.2 10 16 10s16-4.5 16-10" fill="none" stroke="#065f46" stroke-width="4" stroke-linecap="round" />
  <path d="M20 24h24v10a12 12 0 0 1-24 0z" fill="#10b981" />
  <path d="M24 20s4-4 8-4 8 4 8 4" fill="none" stroke="#047857" stroke-width="4" stroke-linecap="round" />
  <path d="M40 18c4-2 4-6 0-8" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" />
</svg>
`);

const languagesIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#eff6ff" />
  <path d="M14 20h24v18H18l-6 6z" fill="#2563eb" />
  <path d="M50 24H34v18h16l6 6z" fill="#60a5fa" />
  <path d="M24 26h4l-3 6h4" fill="none" stroke="#eff6ff" stroke-width="3" stroke-linecap="round" />
  <path d="M42 30h6" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" />
  <path d="M41 36h8" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" />
</svg>
`);

const bestPracticesIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#fef3c7" />
  <path d="M20 14h24v36H20z" fill="#fbbf24" />
  <path d="M24 18h16" fill="none" stroke="#92400e" stroke-width="3" stroke-linecap="round" />
  <path d="M24 24h16" fill="none" stroke="#92400e" stroke-width="3" stroke-linecap="round" />
  <path d="M24 30h16" fill="none" stroke="#92400e" stroke-width="3" stroke-linecap="round" />
  <path d="M24 36l5 5 11-11" fill="none" stroke="#14532d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`);

const solutionsIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#f0fdf4" />
  <path d="M32 12a14 14 0 0 1 14 14c0 7.5-5.5 11-7 14h-14c-1.5-3-7-6.5-7-14A14 14 0 0 1 32 12z" fill="#22c55e" />
  <path d="M26 42h12v6H26z" fill="#14532d" />
  <path d="M28 48h8v4h-8z" fill="#0f172a" />
  <circle cx="32" cy="24" r="6" fill="#dcfce7" />
</svg>
`);

const mentoringIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#fdf2f8" />
  <circle cx="24" cy="24" r="8" fill="#be185d" />
  <circle cx="42" cy="28" r="6" fill="#f472b6" />
  <path d="M16 46c0-6 6-10 8-10s8 4 8 10" fill="#be185d" />
  <path d="M34 46c0-5 5-8 8-8s8 3 8 8" fill="#f472b6" />
  <path d="M34 28l4 4" fill="none" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
</svg>
`);

const teamworkIcon = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#ede9fe" />
  <circle cx="20" cy="24" r="6" fill="#7c3aed" />
  <circle cx="44" cy="24" r="6" fill="#7c3aed" />
  <circle cx="32" cy="20" r="7" fill="#c4b5fd" />
  <path d="M12 48c0-6 5-11 8-11s8 5 8 11" fill="#7c3aed" />
  <path d="M36 48c0-6 5-11 8-11s8 5 8 11" fill="#7c3aed" />
  <path d="M22 48c0-7 5-12 10-12s10 5 10 12" fill="#c4b5fd" />
</svg>
`);

export const CANDOS_ICONS = {
  experience: experienceIcon,
  angularExpert: angularIcon,
  javaSpring: javaSpringIcon,
  languages: languagesIcon,
  bestPractices: bestPracticesIcon,
  solutions: solutionsIcon,
  mentoring: mentoringIcon,
  teamwork: teamworkIcon,
} as const;

export type CandosIconsId = keyof typeof CANDOS_ICONS;
