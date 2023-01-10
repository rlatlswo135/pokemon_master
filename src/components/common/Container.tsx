import React from 'react';
import tw from 'tailwind-styled-components';

type ContainerProps = {
    addstyle?: string;
    children: React.ReactNode;
    id?: string;
    color?: string;
    image?: string;
};

const Container = ({
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
};

export default React.memo(Container);

type DivProps = {
    addstyle: string;
    color: string;
    image: string;
};
const Div = tw.div<DivProps>`
container w-screen h-screen max-h-full max-w-full p-24 font-pokeFont overflow-hidden
${({ addstyle, color }) => `${addstyle} ${color}`}
${({ image }) => {
    if (image.length) return `${image} bg-no-repeat bg-cover bg-center`;
    return '';
}}
`;
