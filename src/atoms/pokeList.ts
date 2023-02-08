import { atom } from 'recoil';
import { v1 } from 'uuid';

export const pokeListState = atom({
    key: `_pokeListState/${v1()}`,
    default: [],
});
