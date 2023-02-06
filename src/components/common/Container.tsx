import React from 'react';
import tw from 'tailwind-styled-components';

type ContainerProps = {
    children: React.ReactNode;
};

export const Container = React.memo(({ children }: ContainerProps) => {
    return <Div>{children}</Div>;
});

const Div = tw.div`
w-screen h-screen p-24 overflow-hidden
bg-defaultImage bg-no-repeat bg-cover bg-center
border-4
`;
