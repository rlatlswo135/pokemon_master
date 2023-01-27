import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as _ from 'lodash';
import tw from 'tailwind-styled-components';
import { pokeListState, myPokeListState } from '@/atoms';
import { Container } from '@/components/common';
import { IMAGE_URL, PAGINATION, POKE_NAME } from '@/constants/pokePedia';
import { getPercent } from '@/util';

export const PokePedia = () => {
    const [pagination, setPagination] = useState<number>(1);
    const [pokemonList, setPokemonList] = useRecoilState(pokeListState);
    const [myPoke, setMyPoke] = useRecoilState(myPokeListState);

    console.log('````````````myPoke````````````', myPoke);
    const nextPageHandler = useCallback(
        () => setPagination((prev) => prev + 1),
        []
    );

    const prevPageHandler = useCallback(
        () =>
            setPagination((prev) => {
                if (prev === 1) return prev;
                return prev - 1;
            }),
        []
    );

    const percent = getPercent(
        Object.values(myPoke).filter((a) => a > 0).length,
        _.size(POKE_NAME)
    );
    const prev = useMemo(() => PAGINATION * (pagination - 1), [pagination]);
    const next = useMemo(() => PAGINATION * pagination, [pagination]);

    return (
        <Container addstyle="px-5 flex justify-center" image="bg-defaultImage">
            <SubContainer>
                <div className="absolute left-[50%] flex justify-center font-bold text-2xl">{`${percent}%`}</div>
                <GridContainer>
                    {pokemonList.slice(prev, next).map((item: any, idx) => {
                        const pokemonId = idx + 1;
                        const isExist = _.includes(
                            Object.keys(myPoke),
                            String(prev + pokemonId)
                        );
                        return (
                            <PokeCard
                                key={`poke_${item.name}`}
                                $exist={isExist}
                            >
                                <PokeImage
                                    alt="사진을 불러올수 없습니다."
                                    src={`${IMAGE_URL}/${prev + pokemonId}.png`}
                                    $exist={isExist}
                                />
                                <div className="text-center font-bold text-xl">
                                    {POKE_NAME[prev + pokemonId]}
                                </div>
                            </PokeCard>
                        );
                    })}
                    <button
                        className="absolute left-3 top-1/2 text-4xl font-bold"
                        type="button"
                        onClick={prevPageHandler}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute right-3 top-1/2 text-4xl font-bold"
                        type="button"
                        onClick={nextPageHandler}
                    >
                        &gt;
                    </button>
                </GridContainer>
            </SubContainer>
        </Container>
    );
};

const SubContainer = tw.div`
container flex relative w-full h-full bg-subContainer
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

/*
firebase -> 가입 이후 firestore에 Uid 넣고

money , bag , pokePedia 데이터 넣어주고

uid:{
    money:number,
    bag:빵[]
    pokepedia:포켓몬id[]
}
*/
