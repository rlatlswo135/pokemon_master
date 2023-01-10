import React from 'react';

type ContainerType = {
    className?: string;
    children: React.ReactNode;
    id?: string;
    color?: string;
};

const Container = ({
    className,
    children,
    id = '',
    color = '',
}: ContainerType) => {
    return (
        <div
            id={id}
            className={`container w-screen h-screen max-w-full min-h-full min-w-full p-24 ${className} ${color}`}
        >
            {children}
        </div>
    );
};

export default React.memo(Container);
