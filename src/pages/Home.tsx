import React from 'react';
import { Button } from '../components/Button';

export const Home = () => {
    return (
        <>
            <div className="text-3xl font-bold underline">Hello world!</div>
            <Button className="test" onClick={() => console.log('test')}>
                buttonTest
            </Button>
        </>
    );
};
