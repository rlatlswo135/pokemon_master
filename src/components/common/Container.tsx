import React from 'react';
import tw from 'tailwind-styled-components';

type ContainerProps = {
    addStyle?: string;
    children: React.ReactNode;
    id?: string;
    color?: string;
    image?: string;
};

const Container = ({
    children,
    addStyle = '',
    image = '',
    id = '',
    color = '',
}: ContainerProps) => {
    return (
        <Div id={id} color={color} addStyle={addStyle} image={image}>
            {children}
        </Div>
    );
};

export default React.memo(Container);

type DivProps = {
    addStyle: string;
    color: string;
    image: string;
};
const Div = tw.div<DivProps>`
container w-screen h-screen max-w-full min-h-full min-w-full p-24
${({ addStyle, color }) => `${addStyle} ${color}`}
${({ image }) => {
    if (image.length) return `${image} bg-no-repeat bg-cover bg-center`;
    return '';
}}
`;
