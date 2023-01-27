import { atom, selector } from 'recoil';

type Coin = number;
export const coinState = atom<Coin>({
    key: '_coin',
    default: 0,
});
