import { atom } from 'recoil';
import { DEFAULT_BAG } from 'src/constants';
import { BagValue } from 'src/types';

type BagState = {
    isOpen: boolean;
    value: BagValue;
};

export const bagState = atom<BagState>({
    key: '_myBag',
    default: {
        isOpen: false,
        value: DEFAULT_BAG,
    },
});
