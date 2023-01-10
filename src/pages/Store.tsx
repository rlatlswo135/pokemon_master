/* eslint-disable global-require */
import React, { useCallback, useContext, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import Container from 'components/common/Container';
import Button from 'components/common/Button';
import { MoneyContext } from 'components/context/MoneyProvider';

const Store = () => {
    const test = useContext(MoneyContext);
    console.log('````````````test````````````', test);
    const { money, getMoney, spendMoney } = useContext(MoneyContext);

    const breads = useMemo(
        () => ['digda', 'fire', 'ghost', 'pika', 'purin', 'rocket', 'tutle'],
        []
    );

    return (
        <Container
            addstyle="flex justify-center bg-opacity-30"
            id="store"
            image="bg-defaultImage"
        >
            <SubContainer>
                {breads &&
                    breads.map((bread) => (
                        <div
                            className="relative w-40 h-40"
                            key={`bread-${bread}`}
                        >
                            <img
                                className="w-full h-full z-50"
                                src={require(`../assets/bread/${bread}.png`)}
                                alt="사진을 불러올수 없습니다"
                            />
                            <Button
                                className="text-center p-2"
                                btnClassName={`p-2 rounded-2xl ${
                                    money < 1200
                                        ? 'bg-red-500/70'
                                        : 'bg-stone-500/70'
                                }`}
                                onClick={spendMoney}
                            >
                                {money < 1200 ? '구매불가' : '1,200'}
                            </Button>
                        </div>
                    ))}
            </SubContainer>
        </Container>
    );
};

export default React.memo(Store);

const SubContainer = tw.div`
container relative flex justify-evenly w-full h-full p-5 bg-slate-100/20    
`;
