import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { GetStaticProps } from 'next';
import * as _ from 'lodash';
import { pokeListState, myPokeListState } from '../src/atoms';
import { PAGINATION, POKE_NAME } from '../src/constants/pokePedia';
import { MyPokeListValue } from '../src/types';
import { getPercent } from '../src/util';
import { PokePediaView } from '../views';
import { getOneGenerationPokemon } from '../src/api/api';

const PokePedia = ({ pokeList }) => {
    console.log('````````````pokeList````````````', pokeList);
    const [pagination, setPagination] = useState<number>(1);
    const pokemonList = useRecoilValue(pokeListState);
    const myPoke = useRecoilValue(myPokeListState) as MyPokeListValue;

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
        <PokePediaView
            percent={percent}
            pokemonList={pokemonList}
            myPoke={myPoke}
            prev={prev}
            next={next}
            prevPageHandler={prevPageHandler}
            nextPageHandler={nextPageHandler}
        />
    );
};

export default PokePedia;

export const getStaticProps: GetStaticProps = async () => {
    const pokeList = await getOneGenerationPokemon();
    return {
        props: {
            pokeList,
        },
    };
};
