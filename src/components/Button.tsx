import React from 'react';

export type ButtonProps = {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ className = '', children, onClick }: ButtonProps) => {
    return (
        <div className={className}>
            <button type="button" onClick={onClick}>
                {children}
            </button>
        </div>
    );
};
