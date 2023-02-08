import { BREADS } from 'src/constants/bread';

export type BuyBread = {
    price: number;
    quan: number;
};

export type BagKey = (typeof BREADS)[number];
export type BagValue = Record<BagKey, number>;

export type BagState = {
    isOpen: boolean;
    value: BagValue;
};

// 이거 타입 수정이 좀 필요해보임;
export type BreadImages = Record<BagKey, string>;

export type MyPokeListValue = Record<number, number>;

export type DefaultData = {
    coin: number;
    bag: BagValue;
    pokeList: { [key: number]: number };
};
