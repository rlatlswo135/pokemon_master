/* eslint-disable react/display-name */
import React from 'react';
import tw from 'tailwind-styled-components';

type ContainerProps = {
    children: React.ReactNode;
    addStyle?: string;
};

export const Container = React.memo(
    ({ children, addStyle }: ContainerProps) => {
        return <Div $addStyle={addStyle || ''}>{children}</Div>;
    }
);

const Div = tw.div<{ $addStyle: string }>`
${({ $addStyle }) => $addStyle}
w-screen h-screen p-24 overflow-hidden p-24
bg-defaultImage bg-no-repeat bg-cover bg-center
`;
