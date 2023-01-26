import { atom } from 'recoil';
import { BREADS } from '@/constants/bread';

type Bag = {
    isOpen: boolean;
    value: BagValue;
};

type BagValue = Record<typeof BREADS[number], number>;

export const bagState = atom<Bag>({
    key: '_mag',
    default: {
        isOpen: false,
        value: {
            digda: 0,
            fire: 0,
            ghost: 0,
            pika: 0,
            purin: 0,
            rocket: 0,
            tutle: 0,
        },
    },
});
