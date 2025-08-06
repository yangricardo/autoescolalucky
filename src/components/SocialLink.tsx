import { SocialLinkProps } from "../data/socialLinks";
import { SocialIcon } from "./SocialIcon";

export function SocialLink(props: Readonly<SocialLinkProps>) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={props['aria-label']}
      className={props.className ?? 'text-gray-500 hover:text-blue-600 transition-colors'}
    >
      <SocialIcon path={props.path} />
    </a>
  );
}
