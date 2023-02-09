import { atom } from 'recoil';
import { v1 } from 'uuid';
import _ from 'lodash';
import { MyPokeListValue } from 'src/types';

export const myPokeListState = atom<MyPokeListValue>({
    key: `_myPokeListState/${v1()}`,
    default: {},
});
