/* eslint-disable global-require */
import React from 'react';

type ImgProps = {
    src: any;
    width?: string;
    height?: string;
};

export const Img = React.memo(
    ({ src, width = 'w-full', height = 'h-full' }: ImgProps) => {
        return <img alt="error" src={src} className={`${width} ${height}`} />;
    }
);
