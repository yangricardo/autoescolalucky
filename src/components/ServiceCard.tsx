import type { ReactNode, PropsWithChildren } from 'react';

type ServiceCardProps = PropsWithChildren<{
  icon: ReactNode;
  title: string;
}>;

export const ServiceCard = ({
  icon,
  title,
  children,
}: ServiceCardProps) => (
  <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg text-center">
    <div className="text-5xl text-yellow-300 mb-4 mx-auto w-fit">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-blue-100">{children}</p>
  </div>
);