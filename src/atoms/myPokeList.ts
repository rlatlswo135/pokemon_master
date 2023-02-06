import { atom } from 'recoil';
import * as _ from 'lodash';
import { MyPokeListValue } from 'src/types';

export const myPokeListState = atom<MyPokeListValue>({
    key: '_myPokeListState',
    default: {},
});
