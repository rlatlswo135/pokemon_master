import React from 'react';
import tw from 'tailwind-styled-components';

export type ButtonProps = {
    className?: string;
    // 수정해야함 any () => void Dispatch .setState랑 합쳐지는거때문에이럼
    onClick?: any;
    children: React.ReactNode;
    btnClassName?: string;
};

export const Button = React.memo(
    ({
        className = '',
        btnClassName = '',
        onClick = () => console.log('default'),
        children,
    }: ButtonProps) => {
        return (
            <button
                className={`active:translate-y-2 border-4 border-goldLine bg-gold rounded-2xl ${className}`}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
);

type DivProps = {
    className: string;
};
