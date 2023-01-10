import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { pokeList } from 'atoms/pokemon';
import Container from 'components/common/Container';
import Button from 'components/common/Button';
import { IMAGE_URL, PAGINATION } from 'constants/pokePedia';

export const PokePedia = () => {
    const [pagination, setPagination] = useState<number>(1);
    const [pokemonList, setPokemonList] = useRecoilState(pokeList);

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

    const prev = useMemo(() => PAGINATION * (pagination - 1), [pagination]);
    const next = useMemo(() => PAGINATION * pagination, [pagination]);

    return (
        <Container addstyle="px-5" image="bg-defaultImage">
            <SubContainer>
                <GridContainer>
                    {pokemonList.slice(prev, next).map((item: any, idx) => (
                        <PokeCard key={`poke_${item.name}`}>
                            <PokeImage
                                alt="사진을 불러올수 없습니다."
                                src={`${IMAGE_URL}/${prev + idx + 1}.png`}
                            />
                        </PokeCard>
                    ))}
                    <Pagination>
                        <Button onClick={prevPageHandler}>&lt;prev</Button>
                        <Button onClick={nextPageHandler}>next&gt;</Button>
                    </Pagination>
                </GridContainer>
            </SubContainer>
        </Container>
    );
};

const SubContainer = tw.div`
container relative w-full h-full bg-slate-100/20
`;

const GridContainer = tw.div`
grid grid-cols-6 gap-y-3 justify-items-center w-full h-full
`;

const PokeCard = tw.div`
h-44 w-44
`;

const PokeImage = tw.img`
w-full h-full grayscale
`;

const Pagination = tw.div`
w-full flex border-4 justify-evenly   
`;
