import React, { useEffect, ReactNode, useRef } from 'react';
import tw from 'tailwind-styled-components';

type ModalProps = {
    children?: ReactNode;
    width?: string;
    height?: string;
    closeHandler: () => void;
};
export const Modal = React.memo(
    ({
        children,
        closeHandler,
        width = 'w-full',
        height = 'h-full',
    }: ModalProps) => {
        const containerRef = useRef<HTMLDivElement | null>(null);
        useEffect(() => {
            const event = (e: MouseEvent) => {
                if (containerRef.current === e.target) {
                    closeHandler();
                }
            };
            document.addEventListener('click', event);
            return () => {
                document.removeEventListener('click', event);
            };
        }, []);
        return (
            <Container
                ref={(e) => {
                    if (e) {
                        containerRef.current = e;
                    }
                }}
                width={width}
                height={height}
                id="modal"
            >
                <ContentWrap>
                    {children}
                    <Close type="button" onClick={closeHandler}>
                        X
                    </Close>
                </ContentWrap>
            </Container>
        );
    }
);

const Container = tw.div<{ width: string; height: string }>`
${({ width, height }) => `${width} ${height}`}
absolute top-0 z-50 py-40
`;
const ContentWrap = tw.div`
relative bg-slate-500/90 flex flex-col items-center justify-evenly w-full h-full
`;
const Close = tw.button`
absolute top-2 right-2 z-50 text-3xl text-red-500
`;
