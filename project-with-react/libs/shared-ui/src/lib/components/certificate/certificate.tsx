"use client";

import type { CertificateType } from '@libs/types';

export interface CertificateProps {
  certificate: CertificateType;
}

export function Certificate({ certificate }: CertificateProps) {
  const { name, issueDate, issuingOrganization, description, credentialUrl } =
    certificate;

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg theme-border theme-card">
      <div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold theme-text-accent">{name}</h3>
          <p className="text-sm font-medium theme-text-secondary">
            {issuingOrganization}
          </p>
          <time
            className="text-xs uppercase tracking-wide theme-text-secondary"
            dateTime={issueDate}
          >
            Issued {issueDate}
          </time>
        </div>
        <p className="mt-4 text-sm leading-relaxed theme-text-secondary">
          {description}
        </p>
      </div>
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center text-sm font-medium transition-colors duration-200 theme-text-accent hover:opacity-80"
        >
          View credential
          <span className="ms-2 inline-block h-3 w-3 rotate-45 border-t-2 border-r-2 border-current" />
        </a>
      )}
    </article>
  );
}

export default Certificate;

