import { atom } from 'recoil';

export const pokeListState = atom({
    key: '_pokeListState',
    default: [],
});
