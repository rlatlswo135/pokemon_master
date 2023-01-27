import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { coinState, myPokeListState, bagState, userState } from '@/atoms';
import { updateDocument } from '@/firebase/store';

export const Save = () => {
    const currentUser = useRecoilValue(userState);
    const coin = useRecoilValue(coinState);
    const { value: bag } = useRecoilValue(bagState);
    const pokeList = useRecoilValue(myPokeListState);

    // 리렌더 막기위해 useRef
    const saveContent = useRef({ coin, bag, pokeList });

    useEffect(() => {
        let id: NodeJS.Timer;
        if (currentUser) {
            const saveData = async () => {
                const result = await updateDocument(
                    'data',
                    currentUser?.uid,
                    saveContent.current
                );
            };
            id = setInterval(saveData, 1000 * 60 * 5);
        }
        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(() => {
        saveContent.current = { coin, bag, pokeList };
    }, [coin, bag, pokeList]);

    return <div className="hidden">save</div>;
};
