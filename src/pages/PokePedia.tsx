import React from 'react';
import { Container } from 'components/common/Container';
import { useRecoilState } from 'recoil';
import { pokeList } from 'atoms/pokemon';

export const PokePedia = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokeList);

    return (
        <Container className="border-8 px-5">
            <div className="grid grid-cols-9 gap-y-3 justify-items-center">
                {pokemonList.map((item: any, index) => (
                    <div className="w-14 -h-14" key={`poke_${item.name}`}>
                        <img
                            alt="사진을 불러올수 없습니다."
                            className="w-full h-full"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/${
                                index + 1
                            }.png`}
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};
