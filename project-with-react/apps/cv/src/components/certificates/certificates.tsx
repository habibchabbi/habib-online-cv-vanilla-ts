"use client";

import { useEffect, useMemo, useState } from 'react';

import {
  CertificatesService,
  getCertificatesByLanguage,
  type Certificate as CertificateData,
} from '@libs/data';
import { useTranslation } from '@libs/shared';
import { Certificate } from '@libs/shared-ui';

export function Certificates() {
  const { language } = useTranslation();

  const [certificates, setCertificates] = useState<CertificateData[]>([]);

  const certificatesService = useMemo(
    () => new CertificatesService(),
    [],
  );

  useEffect(() => {
    let isSubscribed = true;

    certificatesService
      .getCertificates(undefined, true, true, language)
      .then((data) => {
        if (isSubscribed) {
          setCertificates(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setCertificates(getCertificatesByLanguage(language ?? ''));
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [certificatesService, language]);

  return (
    <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((certificate, index) => (
        <li
          key={`${certificate.name}-${certificate.issueDate}`}
          className="fade-in"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <Certificate certificate={certificate} />
        </li>
      ))}
    </ul>
  );
}

export default Certificates;

