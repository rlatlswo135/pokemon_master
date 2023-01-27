import { atom } from 'recoil';
import { DEFAULT_BAG, Bag } from '@/constants';

type BagState = {
    isOpen: boolean;
    value: Bag;
};

export const bagState = atom<BagState>({
    key: '_mag',
    default: {
        isOpen: false,
        value: DEFAULT_BAG,
    },
});
