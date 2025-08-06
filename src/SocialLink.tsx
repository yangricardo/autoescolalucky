import React from 'react';
import { SocialIcon } from './SocialIcon';

interface SocialLinkProps {
  href: string;
  className: string;
  'aria-label': string;
  path: string;
  srText: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  className,
  'aria-label': ariaLabel,
  path,
  srText,
}) => (
  <a href={href} className={className} aria-label={ariaLabel}>
    <SocialIcon path={path} />
    <span className='sr-only'>{srText}</span>
  </a>
);
