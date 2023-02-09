import React from 'react';
import tw from 'tailwind-styled-components';

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <LoadingPing />
        </div>
    );
};

const LoadingPing = tw.div`
w-[30%] h-[30%] border-8 rounded-full animate-ping
`;
