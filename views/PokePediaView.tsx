import React from 'react';
import tw from 'tailwind-styled-components';
import * as _ from 'lodash';
import Image from 'next/image';
import { Container } from '../src/components/common';
import { IMAGE_URL, POKE_NAME } from '../src/constants/pokePedia';

export const PokePediaView = ({
    percent,
    pokemonList,
    myPoke,
    prev,
    next,
    prevPageHandler,
    nextPageHandler,
}) => {
    return (
        <Container
        // addstyle="px-5 flex justify-center"
        // image="bg-defaultImage"
        >
            <SubContainer>
                <Percent>{`${percent}%`}</Percent>
                <GridContainer>
                    {pokemonList.slice(prev, next).map((item: any, idx) => {
                        const pokemonId = idx + 1;
                        const isExist = _.includes(
                            Object.keys(myPoke),
                            String(prev + pokemonId)
                        );
                        console.log(
                            'image',
                            `${IMAGE_URL}/${prev + pokemonId}.png`
                        );
                        return (
                            <PokeCard
                                key={`poke_${item.name}`}
                                $exist={isExist}
                            >
                                <Image
                                    alt="사진을 불러올수 없습니다."
                                    src={`${IMAGE_URL}/${prev + pokemonId}.png`}
                                    fill
                                    // $exist={isExist}
                                />
                                <PokeName>
                                    {POKE_NAME[prev + pokemonId]}
                                </PokeName>
                            </PokeCard>
                        );
                    })}
                    <LeftBtn onClick={prevPageHandler}>&lt;</LeftBtn>
                    <RightBtn onClick={nextPageHandler}>&gt;</RightBtn>
                </GridContainer>
            </SubContainer>
        </Container>
    );
};

const SubContainer = tw.div`
flex relative w-full h-full bg-subContainer px-5
`;

const GridContainer = tw.div`
grid grid-cols-6 gap-y-3 justify-items-center w-full h-full
`;

const PokeCard = tw.div<{ $exist: boolean }>`
${({ $exist }) => ($exist ? '' : 'animate-pulse')}
h-44 w-44
`;

const PokeImage = tw.img<{ $exist: boolean }>`
${({ $exist }) => ($exist ? '' : 'grayscale')}
w-full h-full
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
