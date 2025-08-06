import React from 'react';

interface SocialIconProps {
  path: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ path }) => (
  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
    <path d={path} />
  </svg>
);
