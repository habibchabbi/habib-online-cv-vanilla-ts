'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Achievement } from '@libs/types';
import CanDo from '../../shared/cando/cando';

export interface AchievementsModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

export function AchievementsModal({
  achievements,
  onClose,
}: AchievementsModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="flex max-h-[80%] flex-col rounded-lg border p-4 shadow-lg theme-border theme-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="mb-2 text-center font-semibold">Achievements</h4>
        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {achievements.map((achievement, index) => (
              <li key={index}>
                <CanDo thing={achievement.description} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded border px-4 py-1 transition-colors duration-200 theme-border theme-surface theme-surface-hover"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(modal, document.body) : null;
}

export default AchievementsModal;

