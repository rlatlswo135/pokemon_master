/* eslint-disable react/display-name */
import React, { useEffect, ReactNode, useRef } from 'react';
import tw from 'tailwind-styled-components';

type ModalProps = {
    children?: ReactNode;
    width?: string;
    height?: string;
    closeHandler: () => void;
};
export const Modal = React.memo(({ children, closeHandler }: ModalProps) => {
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
            id="modal"
            ref={(e) => {
                if (e) {
                    containerRef.current = e;
                }
            }}
        >
            <ContentWrap>
                {children}
                <Close type="button" onClick={closeHandler}>
                    X
                </Close>
            </ContentWrap>
        </Container>
    );
});

const Container = tw.div`
absolute top-0 left-0 z-50 py-36 px-20 w-full h-full
`;
const ContentWrap = tw.div`
max-w-full max-h-full relative bg-slate-500/90 flex flex-col items-center justify-evenly w-full h-full
`;
const Close = tw.button`
absolute top-2 right-2 z-50 text-3xl text-red-500
`;
