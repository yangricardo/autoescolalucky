import { ReactNode } from "react";

type ContactItemProps = {
  readonly icon: ReactNode;
  readonly iconBgColor: string;
  readonly children: ReactNode;
};

function ContactItem({ icon, iconBgColor, children }: ContactItemProps) {
  return (
    <div className='flex items-center space-x-3'>
      <div className={`w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center text-left">
        {children}
      </div>
    </div>
  );
}

export { ContactItem };
