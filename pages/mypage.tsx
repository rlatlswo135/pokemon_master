/* eslint-disable react/display-name */
import React, { useCallback, useMemo } from 'react';
import _ from 'lodash';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { userState, bagState, myPokeListState } from '../src/atoms';
import { getPercent } from '@util';
import { POKE_NAME } from '@constants/pokePedia';
import { deleteDocument } from '@fb/store';
import { deleteAuth, signOutAuth } from '@fb/auth';
import { MyPokeListValue, BagState, PageInfo } from '@types';
import { MyPageView } from '@views';

const MyPage = React.memo(() => {
    const { value: bag } = useRecoilValue(bagState) as BagState;
    const myPoke = useRecoilValue(myPokeListState) as MyPokeListValue;
    const [{ displayName, photoURL, uid }] = useRecoilState(userState);
    const resetUser = useResetRecoilState(userState);

    const percent = getPercent(
        Object.values(myPoke).filter((a) => a > 0).length,
        _.size(POKE_NAME)
    );

    const pageInfo: PageInfo = useMemo(
        () => ({
            USER: displayName || 'Guest #',
            BREAD: Object.values(bag).reduce((init, num) => init + num, 0),
            POKEMON: `${percent}%`,
        }),
        [displayName, bag, percent]
    );

    const signOut = useCallback(async () => {
        if (uid && uid !== 'GUSET') {
            const result = await signOutAuth();
        }
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
