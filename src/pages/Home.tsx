import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export const Home = () => {
    return (
        <HomeDiv id="home">
            <ButtonsDiv>
                <Link to="/store">
                    <Button className="mr-4 hover:text-red-600">Start</Button>
                </Link>
                <Button className="ml-4 hover:text-red-600">How To Play</Button>
            </ButtonsDiv>
        </HomeDiv>
    );
};

const HomeDiv = tw.div`
container w-screen h-screen min-w-full min-h-full text-lg
bg-homeImage bg-no-repeat bg-center
`;

const ButtonsDiv = tw.div`
absolute w-full top-3/4 flex items-center justify-center
`;
