import { atom } from 'recoil';
import { DEFAULT_BAG } from '@/constants';
import { BagValue } from '@/types';

type BagState = {
    isOpen: boolean;
    value: BagValue;
};

export const bagState = atom<BagState>({
    key: '_mag',
    default: {
        isOpen: false,
        value: DEFAULT_BAG,
    },
});
