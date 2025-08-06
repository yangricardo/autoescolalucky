import { ReactNode } from "react";

  type ContactItemProps = {
  readonly iconBgColor: string;
  readonly icon: ReactNode;
  readonly children: ReactNode;
};

export function ContactItem({
  iconBgColor,
  icon,
  children,
}: ContactItemProps) {
  return (
    <div className='flex items-center space-x-4'>
      <div className={`p-2 rounded-full ${iconBgColor}`}>{icon}</div>
      <div className='text-left'>{children}</div>
    </div>
  );
}
