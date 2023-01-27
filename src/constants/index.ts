import loading from '@/assets/loading.gif';
import { BagValue, DefaultData } from '@/types';

export const LUCKY: number = 0.05;
export const SUPER_LUCKY: number = 0.01;

export const LOADING_IMAGES: string = loading;

export const DEFAULT_BAG: BagValue = {
    digda: 0,
    fire: 0,
    ghost: 0,
    pika: 0,
    purin: 0,
    rocket: 0,
    tutle: 0,
};

export const DEFAULT_DATA: DefaultData = {
    coin: 0,
    bag: DEFAULT_BAG,
    pokeList: {},
} as const;
