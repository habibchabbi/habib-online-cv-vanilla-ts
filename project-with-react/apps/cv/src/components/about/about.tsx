"use client";

import { useTranslation } from '@libs/shared';

type AboutParagraph = {
  translationKey: `about.section${1 | 2 | 3}`;
  fallback: string;
  className: string;
  delay?: string;
};

const ABOUT_PARAGRAPHS: readonly AboutParagraph[] = [
  {
    translationKey: 'about.section1',
    fallback:
      'With a robust professional background of 9 years, I have excelled in key areas mainly: web-development (Angular-JAVA), architecture, conception, and testing.',
    className: 'fade-slide-left',
  },
  {
    translationKey: 'about.section2',
    fallback:
      'My approach is characterized by creativity, autonomy, optimism, and a positive attitude, coupled with a strong aptitude for critical thinking.',
    className: 'fade-slide-right',
    delay: '0.2s',
  },
  {
    translationKey: 'about.section3',
    fallback:
      'Eager to further diversify and deepen my competencies, I am committed to continuous learning and growth within my career, aspiring to take on additional responsibilities and make significant progress in my professional journey.',
    className: 'fade-slide-left',
    delay: '0.4s',
  },
];

export function About() {
  const { t } = useTranslation();

  return (
    <div className="md:flex-1 rounded-lg transition-colors duration-300 theme-card theme-card-hover">
      <div className="font-['Open_Sans',sans-serif] text-sm font-light leading-7 theme-text-secondary">
        {ABOUT_PARAGRAPHS.map(({ translationKey, fallback, className, delay }, index) => (
          <p
            key={translationKey}
            className={`font-bold ${className}${index === 0 ? '' : ' pt-2'}`}
            style={delay ? { animationDelay: delay } : undefined}
          >
            {t(translationKey, fallback)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default About;
