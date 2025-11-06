// eslint-disable-next-line @nx/enforce-module-boundaries
import type { ContactType } from '@libs/types';

export const CONTACT: ContactType = {
  email: 'habib.chabbi@gmail.com',
  phone: '+32 0494712520',
  whatsapp: '+32 0494712520',
  linkedin: 'https://www.linkedin.com/in/habib-chabbi-31810967/',
  github: 'https://www.github.com/habibchabbi',
  portfolio: 'https://www.habibchabbi.com',
  address: 'Rue du Champ de Mars 5, 1050 Brussels, Belgium',
  addressMap: 'https://www.google.com/maps/place/Rue+du+Champ+de+Mars+5,+1050+Ixelles,+Belgium',
};

export function getContactValue(key: string): string {
  // @ts-ignore
  return CONTACT[key];
}
