import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { GetStaticProps } from 'next';
import _ from 'lodash';
import { myPokeListState } from '@atoms';
import { PAGINATION, POKE_NAME } from '@constants/pokePedia';
import { getPercent } from '@util';
import { PokePediaView } from '@views';
import { getOneGenerationPokemon } from '@api';
import { PokemonAPI } from '@types';

type PokePediaProps = {
    pokeList: PokemonAPI;
};

const PokePedia = ({ pokeList }: PokePediaProps) => {
    const [pagination, setPagination] = useState<number>(1);
    const myPoke = useRecoilValue(myPokeListState);

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
            pokemonList={pokeList.pokemon_species}
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
    const pokeList: PokemonAPI = await getOneGenerationPokemon();
    return {
        props: {
            pokeList: pokeList,
        },
    };
};
