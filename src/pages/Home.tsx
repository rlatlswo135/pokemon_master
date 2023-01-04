import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const Home = () => {
    return (
        <div
            id="home"
            className="container w-screen h-screen min-w-full min-h-full border-4 border-black text-lg"
        >
            <div className="absolute w-full top-3/4 flex items-center justify-center">
                <Link to="/pokepedia">
                    <Button
                        className="mr-4 hover:text-red-600"
                        onClick={() => console.log('test')}
                    >
                        Start
                    </Button>
                </Link>
                <Button
                    className="ml-4 hover:text-red-600"
                    onClick={() => console.log('test')}
                >
                    How To Play
                </Button>
            </div>
        </div>
    );
};
