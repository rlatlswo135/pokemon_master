/* eslint-disable react/display-name */
import React, { useCallback, useMemo } from 'react';
import _ from 'lodash';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState, bagState, myPokeListState } from '../src/atoms';
import { getPercent } from '@util';
import { POKE_NAME } from '@constants/pokePedia';
import { MyPokeListValue, BagState, PageInfo } from '@types';
import { MyPageView } from '@views';

const MyPage = React.memo(() => {
    const { value: bag } = useRecoilValue(bagState) as BagState;
    const myPoke = useRecoilValue(myPokeListState) as MyPokeListValue;
    const { displayName, photoURL } = useRecoilValue(userState);
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

    const signOut = useCallback(() => {
        resetUser();
    }, [resetUser]);

    const deleteAccount = useCallback(() => {
        resetUser();
    }, [resetUser]);

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
