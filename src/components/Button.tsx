import React from 'react';

type ButtonProps = {
    className: string;
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};
