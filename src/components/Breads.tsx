/* eslint-disable global-require */
import React, { useMemo } from 'react';
import { BREADS } from '@/constants/bread';
import tw from 'tailwind-styled-components';

export type BreadsProps = {
    width?: string;
    height?: string;
    grayscale?: boolean;
};
export const Breads = ({
    grayscale = false,
    width = 'w-40',
    height = 'h-40',
}: BreadsProps) => {
    return (
        <>
            {BREADS.map((bread) => (
                <div
                    className={`relative ${width} ${height}`}
                    key={`bread-${bread}`}
                >
                    <Bread
                        src={require(`../assets/bread/${bread}.png`)}
                        alt="사진을 불러올수 없습니다"
                        $grayscale={grayscale}
                    />
                </div>
            ))}
        </>
    );
};

const Bread = tw.img<{ $grayscale: boolean }>`
w-full h-full z-50 ${(props) => (props.$grayscale ? 'grayscale' : '')}
`;
