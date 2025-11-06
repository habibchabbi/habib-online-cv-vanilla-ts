'use client';

import { useState } from 'react';
import { PROJECT_THUMBNAILS } from '@libs/data';
import type { ProjectType } from '@libs/types';
import AchievementsModal from './achievements-modal';
import { getImageSrcFromGroup } from '@libs/shared';

export interface ProjectProps {
  project: ProjectType;
}

export function Project({ project }: ProjectProps) {
  const {
    name,
    startDate,
    endDate,
    thumbnail,
    roleInTheProject,
    achievements,
  } = project;
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  /*
  const thumbnailSrc = PROJECT_THUMBNAILS[thumbnail];
  const thumbnailUrl =
    typeof thumbnailSrc === 'string' ? thumbnailSrc : thumbnailSrc?.src;
    */
  const thumbnailUrl = getImageSrcFromGroup(PROJECT_THUMBNAILS, thumbnail);

  return (
    <div className="w-full rounded-lg border p-1 transition-colors duration-300 theme-border theme-card-soft">
      <div className="top-0 left-0 flex h-[20%] w-full flex-col items-center justify-center text-center theme-card-soft">
        <h3 className="font-semibold">{name}</h3>
        {(startDate || endDate) && (
          <p>
            {startDate ?? ''}
            {startDate && endDate ? ' - ' : ''}
            {endDate ?? ''}
          </p>
        )}
        <span>{roleInTheProject}</span>
      </div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="w-full"
        aria-label={`Show ${name} achievements`}
      >
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={`${name} thumbnail`}
            className="w-full object-cover"
          />
        )}
      </button>
      {showModal && (
        <AchievementsModal
          achievements={achievements}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Project;
