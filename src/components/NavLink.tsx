import type { PropsWithChildren } from 'react';

type NavLinkProps = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => (
  <a
    href={href}
    className="font-semibold text-blue-800 hover:text-blue-900 hover:scale-110 border-b-2 border-transparent hover:border-blue-900 transition duration-300"
  >
    {children}
  </a>
);

export default NavLink;
