/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import tw from 'tailwind-styled-components';
import * as _ from 'lodash';
import { useRecoilState } from 'recoil';
import { bagState } from '@/atoms/bag';
import { Container, Modal, Img } from '@/components/common';
import { LOADING_IMAGES } from '@/constants';
import { BREADS, BREAD_IMAGES } from '@/constants/bread';
import { coinState } from '@/atoms/coin';
import { priceFormat } from '@/util';

export const Store = React.memo(() => {
    const [coin, setCoin] = useRecoilState(coinState);
    const [bag, setBag] = useRecoilState(bagState);
    // 1개 1200 10개 10000원
    const [breadIdx, setBreadIdx] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string[]>([]);

    const buyBreadInfo = useMemo(
        () => [
            { quan: 1, price: 1200 },
            { quan: 10, price: 10000 },
        ],
        []
    );

    const spendCoin = useCallback((price: number) => {
        setCoin((prev) => {
            if (prev < price) return prev;
            return prev - price;
        });
    }, []);

    const getBread = useCallback(
        (quan: number, price: number) => {
            if (coin < price) return;
            setLoading(true);
            setResult([]);
            const gatcha: string[] = [];
            for (let i = 0; i < quan; i += 1) {
                const bread = BREADS[Math.floor(Math.random() * BREADS.length)];
                gatcha.push(bread);
                setBag((prev) => {
                    const copy = { ...prev.value };
                    copy[bread] += 1;
                    return { ...prev, value: copy };
                });
            }
            spendCoin(price);
            setTimeout(() => {
                setLoading(false);
                setResult(gatcha);
            }, 1000);
        },
        [coin]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setBreadIdx((prev) => {
                if (prev === BREADS.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 100);
        return () => {
            console.log('clear');
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Container
                addstyle="flex justify-center bg-opacity-30 relative"
                id="store"
                image="bg-defaultImage"
            >
                <SubContainer>
                    <ImageWrap>
                        {loading ? (
                            <LoadingWrap>
                                <Img src={LOADING_IMAGES} />
                                <LoadingSpan>Loading...</LoadingSpan>
                            </LoadingWrap>
                        ) : (
                            <Img
                                src={
                                    BREAD_IMAGES[
                                        Object.keys(BREAD_IMAGES)[breadIdx]
                                    ]
                                }
                            />
                        )}
                    </ImageWrap>
                    <BuyBreadWrap>
                        {buyBreadInfo.map(({ quan, price }) => {
                            return (
                                <Button
                                    key={`store-btn-${price}`}
                                    onClick={() => getBread(quan, price)}
                                    $deny={coin < price}
                                >{`x${quan} (${priceFormat(price)}￦)`}</Button>
                            );
                        })}
                    </BuyBreadWrap>
                </SubContainer>
            </Container>
            {!!result.length && (
                <Modal closeHandler={() => setResult([])}>
                    <div
                        className={`flex items-center ${
                            result.length !== 1
                                ? 'grid grid-cols-5'
                                : 'justify-center'
                        }`}
                    >
                        {result.map((bread, idx) => (
                            <Img
                                key={`bread-result-${bread}-${idx}`}
                                src={BREAD_IMAGES[bread]}
                                width="w-15"
                                height="h-15"
                            />
                        ))}
                    </div>
                    <ModalBtnWrap>
                        {buyBreadInfo.map(({ quan, price }) => {
                            return (
                                <Button
                                    key={`store-modal-btn-${price}`}
                                    onClick={() => getBread(quan, price)}
                                    $deny={coin < price}
                                >{`x${quan} (${priceFormat(price)}￦)`}</Button>
                            );
                        })}
                    </ModalBtnWrap>
                </Modal>
            )}
        </>
    );
});

const SubContainer = tw.div`
container flex-col flex justify-center items-center w-full h-full p-5 bg-sub
`;
const ImageWrap = tw.div`
rounded-xl border-8 w-[40%] h-[30%] flex items-center border-black/30 bg-slate-500/80 justify-center
`;

const Button = tw.button<{ $deny?: boolean }>`
${({ $deny }) => ($deny ? 'bg-deny' : 'bg-gold')}
p-4 rounded-2xl
`;
const BuyBreadWrap = tw.div`
flex mt-5 w-[50%] justify-evenly
`;
const LoadingWrap = tw.div`
relative w-full h-full
`;
const LoadingSpan = tw.span`
font-bold text-2xl absolute top-[80%] left-1/2 translate-x-[-50%] animate-spin
`;
const ModalBtnWrap = tw.div`
flex w-[50%] justify-evenly
`;
