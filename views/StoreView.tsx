import React from 'react';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { BREAD_IMAGES } from '@constants/bread';
import { Modal } from '@components/common';
import { LOADING_IMAGES } from '@constants';
import { priceFormat } from '@util';
import { BuyBreadInfo, GetBread, OneGenBreads } from '@types';

type StoreViewProps = {
    loading: boolean;
    breadKeys: OneGenBreads[];
    breadIdx: number;
    result: OneGenBreads[];
    coin: number;
    setResult: React.Dispatch<React.SetStateAction<OneGenBreads[]>>;
    buyBreadInfo: BuyBreadInfo;
    getBread: GetBread;
};
export const StoreView = ({
    setResult,
    coin,
    loading,
    breadIdx,
    buyBreadInfo,
    getBread,
    result,
    breadKeys,
}: StoreViewProps) => {
    return (
        <>
            <SubContainer>
                <ImageWrap>
                    {loading ? (
                        <LoadingWrap>
                            <Image
                                alt="error"
                                src={LOADING_IMAGES}
                                fill
                                priority
                                sizes="(max-width: 768px) 20vw,
                                        (max-width: 1200px) 15vw,
                                        10vw"
                            />
                            <LoadingSpan>Loading...</LoadingSpan>
                        </LoadingWrap>
                    ) : (
                        <Image
                            src={BREAD_IMAGES[breadKeys[breadIdx]]}
                            priority
                            alt="error"
                            sizes="(max-width: 768px) 50vw,
                                        (max-width: 1200px) 40vw,
                                        30vw"
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
                            <Image
                                alt="error"
                                key={`bread-result-${bread}-${idx}`}
                                src={BREAD_IMAGES[bread]}
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
};

const SubContainer = tw.div`
flex-col flex justify-center items-center w-full h-full p-5 bg-sub 
`;
const ImageWrap = tw.div`
rounded-xl border-8 w-1/2 h-1/2 flex items-center
border-black/30 bg-slate-500/80 justify-center
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
