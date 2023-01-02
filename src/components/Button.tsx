import React from 'react';

export type ButtonProps = {
    className: string;
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    );
};
