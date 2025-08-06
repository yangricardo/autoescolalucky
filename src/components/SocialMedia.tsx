import { socialLinks } from "../data/socialLinks";
import { SocialLink } from "./SocialLink";

export function SocialMedia() {
  return (
    <div className='flex justify-center space-x-4'>
      {socialLinks.map((link) => (
        <SocialLink key={link.srText} {...link} />
      ))}
    </div>
  );
}
