import React, { useMemo, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { MyBagContext, useMyBagContext } from 'context/MyBagProvider';
import { MoneyContext, useMoneyContext } from 'context/MoneyProvider';
import Button from './common/Button';

export const Header = () => {
    // let money, getMoney;
    const { money, getMoney, spendMoney } = useMoneyContext() as MoneyContext;
    const { isBagOpen, toggleBagOpen } = useMyBagContext() as MyBagContext;

    const { pathname: pathName } = useLocation();

    const routeItems = useMemo(() => ['myPage', 'pokepedia', 'store'], []);

    if (pathName === '/') return <header />;

    return (
        <header className="flex w-full justify-evenly absolute p-5 text-xl z-50">
            {money}
            <Button
                className="border-4 border-yellow-500 bg-yellow-300 rounded-2xl"
                btnClassName="hover:underline"
                onClick={getMoney}
            >
                GET!
            </Button>
            {routeItems.map((url) => (
                <Link
                    key={`header-url-${url}`}
                    className={`${
                        pathName === `/${url}` ? 'text-red-600' : ''
                    } hover:text-red-600`}
                    to={`/${url}`}
                >
                    {url}
                </Link>
            ))}
            <Button onClick={toggleBagOpen}>MyBag</Button>
        </header>
    );
};
