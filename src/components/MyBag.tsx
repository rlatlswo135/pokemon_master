/* eslint-disable global-require */
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    Suspense,
} from 'react';
import tw from 'tailwind-styled-components';
import * as _ from 'lodash';
import { useRecoilState } from 'recoil';
import { Img, Modal } from './common';
import { BREADS } from '@/constants/bread';
import { IMAGE_URL, POKE_NAME } from '@/constants/pokePedia';
import { makePokeId } from '@/util';
import { bagState, myPokeListState } from '@/atoms';
import { BagKey } from '@/constants';

export const MyBag = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [bag, setBag] = useRecoilState(bagState);
    const [myPoke, setMyPoke] = useRecoilState(myPokeListState);

    const [open, setOpen] = useState<boolean>(false);
    const [result, setResult] = useState<number[]>([]);
    const { isOpen, value } = bag;

    const openHandler = useCallback((bread: BagKey, quan: number) => {
        setOpen(true);
        setBag((prev) => {
            const copy = { ...prev.value };
            copy[bread] = 0;
            return {
                ...prev,
                value: copy,
            };
        });
        const sticker = [];
        for (let i = 0; i < quan; i += 1) {
            const pokeId = makePokeId(_.size(POKE_NAME));
            sticker.push(pokeId);
            if (!myPoke[pokeId]) {
                setMyPoke((prev) => {
                    const copy = { ...prev };
                    copy[pokeId] = 1;
                    return copy;
                });
            }
        }

        setResult(sticker);
    }, []);

    return (
        <div
            ref={(e) => {
                if (e) {
                    containerRef.current = e;
                }
            }}
        >
            <Div $isOpen={isOpen}>
                {/* <Breads button={breadBtnProps} grayscale /> */}
                {BREADS.map((bread) => {
                    console.log('value', value);
                    const quan = value[bread];
                    return (
                        <BreadWrap key={`bread-${bread}`}>
                            <Bread
                                src={require(`../assets/bread/${bread}.png`)}
                                alt="사진을 불러올수 없습니다"
                                $grayscale={quan < 1}
                            />
                            <Button
                                type="button"
                                quan={quan}
                                onClick={() => openHandler(bread, quan)}
                            >
                                open!
                            </Button>
                            <Quan>x{quan}</Quan>
                        </BreadWrap>
                    );
                })}
            </Div>
            {open && (
                <Modal closeHandler={() => setOpen(false)}>
                    <Suspense fallback={<div>loading</div>}>
                        <div
                            className={`flex items-center w-full h-full py-32 ${
                                result.length > 5
                                    ? 'grid grid-cols-5'
                                    : 'justify-center'
                            }`}
                        >
                            {result.map((item) => (
                                <div className="relative flex flex-col flex-[0.3] items-center">
                                    <Img src={`${IMAGE_URL}/${item}.png`} />
                                    <span className="relative top-[-30px] font-bold text-2xl">
                                        {POKE_NAME[item]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div>asd</div>
                    </Suspense>
                </Modal>
            )}
        </div>
    );
};

const Div = tw.div<{ $isOpen: boolean }>`
flex items-center justify-evenly absolute z-40 bg-gold/80 w-full h-1/5 transition-all
${(props) => (props.$isOpen ? 'top-4/5' : 'top-full')}
`;

const BreadWrap = tw.div`
relative flex flex-col items-center w-40
`;

const Button = tw.button<{ quan: number }>`
${({ quan }) => (!quan ? 'bg-deny' : 'bg-gold')}
mt-2 p-2 border-1 rounded-2xl
`;

const Bread = tw.img<{ $grayscale: boolean }>`
w-full h-full z-50 ${(props) => (props.$grayscale ? 'grayscale' : '')}
`;

const Quan = tw.span`
absolute top-0 right-0 z-50
`;
