import { type ReactNode } from 'react';

type PromoCardOption = {
  text: string;
  highlight?: boolean;
  marginTop?: boolean;
};

type PromoCardProps = {
  title: string;
  price: ReactNode;
  priceDetails: string;
  options: PromoCardOption[];
};

export const PromoCard = ({
  title,
  price,
  priceDetails,
  options,
}: PromoCardProps) => (
  <div className="bg-blue-800 text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center h-full group">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="transition-transform duration-300 group-hover:scale-110 mb-2">
      {price}
    </div>
    <p className="text-blue-100 mb-4">{priceDetails}</p>
    {options.map((opt, index) => (
      <p
        key={index}
        className={`font-semibold ${ opt.highlight ? 'text-lg' : 'text-blue-100'
          } ${ opt.marginTop ? 'mt-4' : '' }`}
      >
        {opt.text}
      </p>
    ))}
  </div>
);
