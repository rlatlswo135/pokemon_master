import { atom } from 'recoil';
import { BREADS } from '@/constants/bread';
import { DEFAULT_BAG } from '@/constants';

type Bag = {
    isOpen: boolean;
    value: BagValue;
};

export type BagValueKey = typeof BREADS[number];
type BagValue = Record<BagValueKey, number>;

export const bagState = atom<Bag>({
    key: '_mag',
    default: {
        isOpen: false,
        value: DEFAULT_BAG,
    },
});
