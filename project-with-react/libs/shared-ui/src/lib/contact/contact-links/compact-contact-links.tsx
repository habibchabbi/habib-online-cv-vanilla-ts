"use client";

import { useEffect, useRef, useState } from 'react';
import type { ContactType } from '@libs/types';
import LinkedinIcon from '../contact-icons/linkedin-icon';
import GithubIcon from '../contact-icons/github-icon';
import PortfolioIcon from '../contact-icons/portfolio-icon';
import WhatsappIcon from '../contact-icons/whatsapp-icon';
import PhoneIcon from '../contact-icons/phone-icon';
import EmailIcon from '../contact-icons/email-icon';
import AddressIcon from '../contact-icons/address-icon';
import CopyToClipboardIcon from '../../shared/copy-to-clipboard-icon/copy-to-clipboard-icon';

export interface ContactLinksProps {
  contact: ContactType;
}

export function ContactLinks({ contact }: ContactLinksProps) {

  const [showEmail, setShowEmail] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);

  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  const { email, phone, whatsapp, linkedin, github, portfolio, address, addressMap } = contact;

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setShowEmail(false);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText(phone);
    setShowPhone(false);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyWhatsapp = async () => {
    await navigator.clipboard.writeText(whatsapp);
    setShowWhatsapp(false);
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emailRef.current && !emailRef.current.contains(event.target as Node)) {
        setShowEmail(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setShowPhone(false);
      }
      if (whatsappRef.current && !whatsappRef.current.contains(event.target as Node)) {
        setShowWhatsapp(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative" ref={emailRef}>
        <button
          aria-label="Email"
          title="Click to see email address"
          onClick={() => setShowEmail((v) => !v)}
          className="flex h-6 w-6 items-center justify-center p-0 text-[#EA4335]"
        >
          <EmailIcon />
        </button>
        {showEmail && (
          <div className="absolute right-0 mt-2 flex w-56 items-center rounded border p-2 shadow-md theme-border theme-card">
            <span className="text-sm flex-grow">{email}</span>
            <button
              aria-label="Copy email"
              onClick={handleCopyEmail}
              className="ml-2 flex h-6 w-6 items-center justify-center p-0 text-[#EA4335]"
            >
              <CopyToClipboardIcon />
            </button>
          </div>
        )}
        {copiedEmail && (
          <div className="absolute right-0 mt-2 rounded px-2 py-1 text-xs shadow animate-pulse theme-card theme-text-accent">
            Copied to clipboard!
          </div>
        )}
      </div>
      <div className="relative" ref={phoneRef}>
        <button
          aria-label="Phone"
          title="Click to see phone number"
          onClick={() => setShowPhone((v) => !v)}
          className="flex h-6 w-6 items-center justify-center p-0 text-blue-600"
        >
          <PhoneIcon />
        </button>
        {showPhone && (
          <div className="absolute right-0 mt-2 flex w-56 items-center rounded border p-2 shadow-md theme-border theme-card">
            <span className="text-sm flex-grow">{phone}</span>
            <button
              aria-label="Copy phone"
              onClick={handleCopyPhone}
              className="ml-2 flex h-6 w-6 items-center justify-center p-0 text-blue-600"
            >
              <CopyToClipboardIcon />
            </button>
          </div>
        )}
        {copiedPhone && (
          <div className="absolute right-0 mt-2 rounded px-2 py-1 text-xs shadow animate-pulse theme-card theme-text-accent">
            Copied to clipboard!
          </div>
        )}
      </div>
      <div className="relative" ref={whatsappRef}>
        <button
          aria-label="WhatsApp"
          title="Click to see WhatsApp number"
          onClick={() => setShowWhatsapp((v) => !v)}
          className="flex h-6 w-6 items-center justify-center p-0 text-[#25D366]"
        >
          <WhatsappIcon />
        </button>
        {showWhatsapp && (
          <div className="absolute right-0 mt-2 flex w-56 items-center rounded border p-2 shadow-md theme-border theme-card">
            <span className="text-sm flex-grow">{whatsapp}</span>
            <button
              aria-label="Copy whatsapp"
              onClick={handleCopyWhatsapp}
              className="ml-2 flex h-6 w-6 items-center justify-center p-0 text-[#25D366]"
            >
              <CopyToClipboardIcon />
            </button>
          </div>
        )}
        {copiedWhatsapp && (
          <div className="absolute right-0 mt-2 rounded px-2 py-1 text-xs shadow animate-pulse theme-card theme-text-accent">
            Copied to clipboard!
          </div>
        )}
      </div>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Click to go to LinkedIn profile"
        className="flex h-6 w-6 items-center justify-center p-0 text-blue-600"
      >
        <LinkedinIcon  />

      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Click to go to GitHub profile"
        className="flex h-6 w-6 items-center justify-center p-0 text-gray-900"
      >

        <GithubIcon />
      </a>
      <a
        href={portfolio}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Portfolio"
        title="Click to go to portfolio page"
        className="flex h-6 w-6 items-center justify-center p-0 text-green-600"
      >
        <PortfolioIcon />
      </a>
      <a
        href={addressMap}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Address"
        title={`Click to open ${address} on Google Maps`}
        className="flex h-6 w-6 items-center justify-center p-0 text-red-500"
      >
        <AddressIcon />
      </a>
    </div>
  );
}

export default ContactLinks;
