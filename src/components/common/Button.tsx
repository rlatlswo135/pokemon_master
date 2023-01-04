import React from 'react';

export type ButtonProps = {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
    btnClassName?: string;
};

export const Button = ({
    className = '',
    btnClassName = '',
    children,
    onClick,
}: ButtonProps) => {
    return (
        <div
            className={`min-w-min min-h-min hover:cursor-pointer ${className}`}
        >
            <button
                className={`min-w-full min-h-full active:translate-y-2 ${btnClassName}`}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};
