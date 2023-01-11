/* eslint-disable global-require */
import React, { useCallback, useContext, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import Container from 'components/common/Container';
import { Breads } from 'components/Breads';
import { MoneyContext, useMoneyContext } from 'context/MoneyProvider';
import { ButtonProps } from 'components/common/Button';

const Store = () => {
    const { money, getMoney, spendMoney } = useMoneyContext() as MoneyContext;

    const breadBtnProps: ButtonProps = useMemo(
        () => ({
            className: 'text-center p-2',
            btnClassName: `p-2 rounded-2xl ${
                money < 1200 ? 'bg-red-500/70' : 'bg-stone-500/70'
            }`,
            onClick: spendMoney,
            children: money < 1200 ? '1,200!' : '1,200',
        }),
        [money, spendMoney]
    );

    return (
        <Container
            addstyle="flex justify-center bg-opacity-30"
            id="store"
            image="bg-defaultImage"
        >
            <SubContainer>
                <div>뽑기!</div>
                {/* <Breads button={breadBtnProps} /> */}
            </SubContainer>
        </Container>
    );
};

export default React.memo(Store);

const SubContainer = tw.div`
container relative flex justify-evenly w-full h-full p-5 bg-slate-100/20    
`;

const Bread = tw.img`
w-full h-full z-50    
`;
