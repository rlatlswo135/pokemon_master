import React from 'react';
import tw from 'tailwind-styled-components';
import _ from 'lodash';
import Image from 'next/image';
import { IMAGE_URL, POKE_NAME } from '@constants/pokePedia';
import { MyPokeListValue, NameAndUrl } from '@src/types';

type PokePediaViewProps = {
    percent: string;
    pokemonList: NameAndUrl[];
    myPoke: MyPokeListValue;
    prev: number;
    next: number;
    prevPageHandler: () => void;
    nextPageHandler: () => void;
};
export const PokePediaView = ({
    percent,
    pokemonList,
    myPoke,
    prev,
    next,
    prevPageHandler,
    nextPageHandler,
}: PokePediaViewProps) => {
    return (
        <SubContainer>
            <Percent>{`${percent}%`}</Percent>
            <GridContainer>
                {pokemonList.slice(prev, next).map((item: any, idx) => {
                    const pokemonId = idx + 1;
                    const isExist = _.includes(
                        Object.keys(myPoke),
                        String(prev + pokemonId)
                    );
                    return (
                        <PokeCard key={`poke_${item.name}`} $exist={isExist}>
                            <div
                                className={`${
                                    isExist ? '' : 'grayscale'
                                } w-full h-40 relative`}
                            >
                                <Image
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 20vw,
                                        (max-width: 1200px) 15vw,
                                        10vw"
                                    alt="사진을 불러올수 없습니다."
                                    src={`${IMAGE_URL}/${prev + pokemonId}.png`}
                                />
                            </div>
                            <PokeName>{POKE_NAME[prev + pokemonId]}</PokeName>
                        </PokeCard>
                    );
                })}
                <LeftBtn onClick={prevPageHandler}>&lt;</LeftBtn>
                <RightBtn onClick={nextPageHandler}>&gt;</RightBtn>
            </GridContainer>
        </SubContainer>
    );
};

const SubContainer = tw.div`
flex relative w-full h-full bg-subContainer px-5
`;

const GridContainer = tw.div`
grid grid-cols-6 gap-y-3 justify-items-center w-full h-full
overflow-y-auto overflow-x-hidden 
`;

const PokeCard = tw.div<{ $exist: boolean }>`
${({ $exist }) => ($exist ? '' : 'animate-pulse')}
h-44 w-44
`;

const PokeName = tw.div`
text-center font-bold text-xl
`;

const Percent = tw.div`
absolute left-[50%] flex justify-center font-bold text-2xl
`;
const LeftBtn = tw.button`
absolute left-3 top-1/2 text-4xl font-bold
`;
const RightBtn = tw.button`
absolute right-3 top-1/2 text-4xl font-bold
`;
