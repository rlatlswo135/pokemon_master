/* eslint-disable global-require */
import React, { useMemo } from 'react';
import { BREADS } from 'constants/bread';
import tw from 'tailwind-styled-components';
import Button, { ButtonProps } from './common/Button';

export type BreadsProps = {
    button?: ButtonProps;
    width?: string;
    height?: string;
    grayscale?: boolean;
};
export const Breads = ({
    button,
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
                    {button && (
                        <Button
                            className={button.className}
                            btnClassName={button.btnClassName}
                            onClick={button.onClick}
                        >
                            {button.children}
                        </Button>
                    )}
                </div>
            ))}
        </>
    );
};

type BreadType = {
    $grayscale: boolean;
};

const Bread = tw.img<BreadType>`
w-full h-full z-50 ${(props) => (props.$grayscale ? 'grayscale' : '')}
`;
