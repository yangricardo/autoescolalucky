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
  <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-amber-200 hover:shadow-lg transition-shadow duration-300">
    <div className="text-5xl text-primary mb-4 mx-auto w-fit transition-transform duration-300 group-hover:scale-125">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-blue-100">{children}</p>
  </div>
);