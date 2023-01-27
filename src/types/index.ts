import { BREADS } from '@/constants/bread';

export type BuyBread = {
    price: number;
    quan: number;
};

export type BagKey = typeof BREADS[number];
export type BagValue = Record<BagKey, number>;

export type BreadImages = {
    [key: string]: string;
};
export type MyPokeListValue = {
    [key: number]: number;
};

export type DefaultData = {
    coin: number;
    bag: BagValue;
    pokeList: { [key: number]: number };
};
