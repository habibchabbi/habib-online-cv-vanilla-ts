import type { StaticImageData } from 'next/image';

import cruxsoft from '../employers-icons/cruxsoft.jpeg';
import freelancer from '../employers-icons/freelancer.svg';
import imbus from '../employers-icons/imbus.jpg';
import smals from '../employers-icons/smals.jpg';

export const EMPLOYER_ICONS = {
  smals: smals,
  cruxsoft,
  imbus,
  freelancer,
} as const satisfies Record<string, StaticImageData | string>;

export type EmployerIconId = keyof typeof EMPLOYER_ICONS;
