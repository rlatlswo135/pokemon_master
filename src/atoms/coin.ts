import { atom } from 'recoil';

export const coinState = atom<number>({
    key: '_coin',
    default: 0,
});
