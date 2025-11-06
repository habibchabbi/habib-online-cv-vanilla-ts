import { StaticImageData } from 'next/image';
import architecture from '../project-thumbnail/architecture.png';
import cstconnect from '../project-thumbnail/cstconnect.png';
import ihrm from '../project-thumbnail/ihrm.png';
import pam from '../project-thumbnail/pam.png';
import portfolio from '../project-thumbnail/portfolio.png';
import testbench from '../project-thumbnail/testbench.png';
import wita from '../project-thumbnail/wita.png';
import architectPortfolio from '../project-thumbnail/architectPortfolio.png';

export const PROJECT_THUMBNAILS = {
  architecture,
  cstconnect,
  ihrm,
  pam,
  portfolio,
  testbench,
  wita,
  architectPortfolio
} as const satisfies Record<string, StaticImageData | string>;

export type ProjectThumbnailId = keyof typeof PROJECT_THUMBNAILS;
