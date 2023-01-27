import { atom } from 'recoil';
import * as _ from 'lodash';
import { POKE_NAME } from '@/constants/pokePedia';

const makeDefault = (length: number) => {
    const result: { [key: number]: 0 } = {};
    for (let i = 0; i < length; i += 1) {
        result[i + 1] = 0;
    }
    return result;
};

type MyPokeListValue = {
    [key: number]: number;
};
export const myPokeListState = atom<MyPokeListValue>({
    key: '_myPokeListState',
    // default: makeDefault(_.size(POKE_NAME)),
    default: {},
});
