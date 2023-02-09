import { atom } from 'recoil';
import { v1 } from 'uuid';
import { DEFAULT_BAG } from 'src/constants';
import { BagState } from 'src/types';

export const bagState = atom<BagState>({
    key: `_myBag/${v1()}`,
    default: {
        isOpen: false,
        value: DEFAULT_BAG,
    },
});
