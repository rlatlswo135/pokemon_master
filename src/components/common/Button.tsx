import React from 'react';
import tw from 'tailwind-styled-components';

export type ButtonProps = {
    className?: string;
    // 수정해야함 any () => void Dispatch .setState랑 합쳐지는거때문에이럼
    onClick?: any;
    children: React.ReactNode;
    btnClassName?: string;
};

const Button = ({
    className = '',
    btnClassName = '',
    onClick = () => console.log('default'),
    children,
}: ButtonProps) => {
    return (
        <ButtonDiv className={className}>
            <button
                className={`min-w-full min-h-full active:translate-y-2 ${btnClassName}`}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        </ButtonDiv>
    );
};

export default React.memo(Button);

type DivProps = {
    className: string;
};
const ButtonDiv = tw.div<DivProps>`
min-w-min min-h-min hover:cursor-pointer ${({ className }) => `${className}`}
`;
