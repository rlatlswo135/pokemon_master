import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useContext,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './common/Button';
import { MoneyContext } from './context/MoneyProvider';

export const Header = () => {
    const { money, getMoney } = useContext(MoneyContext);
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
                    className="hover:text-red-600"
                    to={`/${url}`}
                >
                    {url}
                </Link>
            ))}
        </header>
    );
};
