import React from 'react';
import tw from 'tailwind-styled-components';

type ContainerProps = {
    addstyle?: string;
    children: React.ReactNode;
    id?: string;
    color?: string;
    image?: string;
};

export const Container = React.memo(
    ({
        children,
        addstyle = '',
        image = '',
        id = '',
        color = '',
    }: ContainerProps) => {
        return (
            <Div id={id} color={color} addstyle={addstyle} image={image}>
                {children}
            </Div>
        );
    }
);

type DivProps = {
    addstyle: string;
    color: string;
    image: string;
};
const Div = tw.div<DivProps>`
container w-screen h-screen max-h-full max-w-full p-24 overflow-hidden
${({ addstyle, color }) => `${addstyle} ${color}`}
${({ image }) => {
    if (image.length) return `${image} bg-no-repeat bg-cover bg-center`;
    return '';
}}
`;
