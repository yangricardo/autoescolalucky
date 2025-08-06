import type { ReactNode, PropsWithChildren } from 'react';
import { trackEvent } from '../utils/analytics';

type ContactInfoItemProps = PropsWithChildren<{
    icon: ReactNode;
    title: string;
    href?: string;
    trackCategory?: string;
}>;

export const ContactInfoItem = ({
    icon,
    title,
    children,
    href,
    trackCategory,
}: ContactInfoItemProps) => {
    const handleClick = () => {
        if (href && trackCategory) {
            trackEvent(`click_${trackCategory}`, 'Contact', title);
        }
    };

    const content = (
        <div className="flex items-center group">
            <div className="bg-white group-hover:bg-yellow-300 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-200 group-hover:scale-110">
                {icon}
            </div>
            <div>
                <p className="font-bold text-base md:text-lg text-white group-hover:text-yellow-300 break-all">
                    {title}
                </p>
                <p className="text-blue-100">{children}</p>
            </div>
        </div>
    );

    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            title={
                typeof children === 'string' || typeof children === 'number'
                    ? `${title}: ${children}`
                    : title
            }
        >
            {content}
        </a>
    ) : (
        content
    );
};