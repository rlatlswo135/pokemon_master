import { atom } from 'recoil';
import { v1 } from 'uuid';

export const coinState = atom<number>({
    key: `_coin/${v1()}`,
    default: 0,
});
