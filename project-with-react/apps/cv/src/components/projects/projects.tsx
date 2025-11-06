"use client";

import { useEffect, useMemo, useState } from 'react';

import {
  getProjectsByLanguage,
  ProjectsService,
  type Project as ProjectData,
} from '@libs/data';
import { useTranslation } from '@libs/shared';
import { Project } from '@libs/shared-ui';

export function Projects() {
  const { language } = useTranslation();

  const [projects, setProjects] = useState<ProjectData[]>([]);

  const projectsService = useMemo(
    () => new ProjectsService(),
    [],
  );

  useEffect(() => {
    let isSubscribed = true;

    projectsService
      .getProjects(undefined, true, true, language)
      .then((data) => {
        if (isSubscribed) {
          setProjects(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setProjects(getProjectsByLanguage(language ?? ''));
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [language, projectsService]);

  return (
    <ul className="flex flex-wrap list-none">
      {projects.map((project, i) => (
        <li
          key={project.name}
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 border-gray-500 rounded-lg  fade-in"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
