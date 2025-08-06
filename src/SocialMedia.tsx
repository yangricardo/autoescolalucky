import { SocialLink } from './SocialLink';
import { socialLinks } from './socialLinks';

export const SocialMedia = () => {
  return (
    <div className='flex justify-center space-x-4'>
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
};
