'use client'

import { useState } from 'react';
import EmailIcon from '../contact-icons/email-icon';
import PhoneIcon from '../contact-icons/phone-icon';
import WhatsappIcon from '../contact-icons/whatsapp-icon';
import LinkedinIcon from '../contact-icons/linkedin-icon';
import GithubIcon from '../contact-icons/github-icon';
import PortfolioIcon from '../contact-icons/portfolio-icon';
import AddressIcon from '../contact-icons/address-icon';
import CopyToClipboardIcon from '../../shared/copy-to-clipboard-icon/copy-to-clipboard-icon';
import { ContactLinksProps } from '../contact-links/compact-contact-links';
import { getContactValue } from '@libs/data';

export interface LooseContactLinksProps extends ContactLinksProps {
  orientation?: 'horizontal' | 'vertical';
}

export function LooseContactLinks({ contact, orientation = 'horizontal' }: LooseContactLinksProps) {

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      key: 'email',
      value: getContactValue('email'),
      icon: <EmailIcon />,
      color: 'text-[#EA4335]',
      ariaLabel: 'Email',
      title: 'Click to see email address',
    },
    {
      key: 'phone',
      value: getContactValue('phone'),
      icon: <PhoneIcon />,
      color: 'text-blue-600',
      ariaLabel: 'Phone',
      title: 'Click to see phone number',
    },
    {
      key: 'whatsapp',
      value: getContactValue('whatsapp'),
      icon: <WhatsappIcon />,
      color: 'text-[#25D366]',
      ariaLabel: 'WhatsApp',
      title: 'Click to see WhatsApp number',
    },
    {
      key: 'linkedin',
      value: getContactValue('linkedin'),
      icon: <LinkedinIcon />,
      color: 'text-blue-600',
      ariaLabel: 'LinkedIn',
      title: 'Click to go to LinkedIn profile',
      href: getContactValue('linkedin'),
    },
    {
      key: 'github',
      value: getContactValue('github'),
      icon: <GithubIcon />,
      color: 'text-gray-900',
      ariaLabel: 'GitHub',
      title: 'Click to go to GitHub profile',
      href: getContactValue('github'),
    },
    {
      key: 'portfolio',
      value: getContactValue('portfolio'),
      icon: <PortfolioIcon />,
      color: 'text-green-600',
      ariaLabel: 'Portfolio',
      title: 'Click to go to portfolio page',
      href: getContactValue('portfolio'),
    },
    {
      key: 'address',
      value: getContactValue('address'),
      icon: <AddressIcon />,
      color: 'text-red-500',
      ariaLabel: 'Address',
      title: 'Click to open address in Google Maps',
      href: getContactValue('addressMap'),
    },
  ];

  const containerClass =
    orientation === 'vertical'
      ? 'flex flex-col space-y-2'
      : 'flex flex-wrap items-center gap-x-4 gap-y-1';

  return (
    <div className={containerClass}>
      {contactItems.map(
        ({ key, value, icon, color, ariaLabel, title, href }, i) => (
          <div
            key={key}
            className={`relative flex items-center rounded border p-1 shadow-md theme-border theme-card ${
              orientation === 'vertical' ? 'justify-between' : ''
            }`}
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={title}
                className={`flex h-6 w-6 items-center justify-center p-0 ${color}`}
              >
                {icon}
              </a>
            ) : (
              <button
                aria-label={ariaLabel}
                title={title}
                className={`flex h-6 w-6 items-center justify-center p-0 ${color}`}
              >
                {icon}
              </button>
            )}
            <span className="text-sm ms-2">{value}</span>
            <button
              aria-label={`Copy ${key}`}
              onClick={() => handleCopy(value, key)}
              className={`ml-2 flex h-6 w-6 items-center justify-center p-0 ${color}`}
            >
              <CopyToClipboardIcon />
            </button>
            {copied === key && (
              <div className="absolute right-0 mt-2 rounded px-2 py-1 text-xs shadow animate-pulse theme-card theme-text-accent">
                Copied to clipboard!
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default LooseContactLinks;

