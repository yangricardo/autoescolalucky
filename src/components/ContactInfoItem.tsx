import type { ReactNode, PropsWithChildren } from 'react';

type ContactInfoItemProps = PropsWithChildren<{
    icon: ReactNode;
    title: string;
    href?: string;
}>;

export const ContactInfoItem = ({
    icon,
    title,
    children,
    href,
}: ContactInfoItemProps) => {
    const content = (
        <div className="flex items-center group">
            <div className="bg-white text-lucky-blue w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="font-bold text-lg text-white group-hover:text-lucky-yellow">
                    {title}
                </p>
                <p className="text-blue-200">{children}</p>
            </div>
        </div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        content
    );
};