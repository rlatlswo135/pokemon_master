import React, { useCallback, useMemo } from 'react';
import * as _ from 'lodash';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { userState, bagState, myPokeListState } from '../src/atoms';
import { getPercent, makeRandom } from '../src/util';
import { POKE_NAME } from '../src/constants/pokePedia';
import { deleteDocument } from '../src/firebase/store';
import { deleteAuth, signOutAuth } from '../src/firebase/auth';
import { MyPokeListValue, BagState } from '../src/types';
import { MyPageView } from '../views/MyPageView';

const MyPage = React.memo(() => {
    const { value: bag } = useRecoilValue(bagState) as BagState;
    const myPoke = useRecoilValue(myPokeListState) as MyPokeListValue;
    const [{ displayName, photoURL, uid }, setUser] = useRecoilState(userState);
    const resetUser = useResetRecoilState(userState);

    const test = Object.values(myPoke);
    const percent = getPercent(
        Object.values(myPoke).filter((a) => a > 0).length,
        _.size(POKE_NAME)
    );

    const pageInfo = useMemo(
        () => ({
            USER: displayName || 'Guest #',
            BREAD: Object.values(bag).reduce((init, num) => init + num, 0),
            POKEMON: `${percent}%`,
        }),
        [displayName, bag, percent]
    );

    const signOut = useCallback(async () => {
        const result = await signOutAuth();
        resetUser();
    }, []);

    const deleteAccount = useCallback(async () => {
        if (uid && uid !== 'GUEST') {
            // db에 데이터 제거
            const delDoc = await deleteDocument('data', uid);
            const delAuth = await deleteAuth();
        }
        resetUser();
    }, [uid]);

    return (
        <MyPageView
            photoURL={photoURL}
            pageInfo={pageInfo}
            signOut={signOut}
            deleteAccount={deleteAccount}
        />
    );
});

export default MyPage;
