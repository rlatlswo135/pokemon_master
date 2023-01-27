import digda from '@/assets/bread/digda.png';
import fire from '@/assets/bread/fire.png';
import ghost from '@/assets/bread/ghost.png';
import pika from '@/assets/bread/pika.png';
import purin from '@/assets/bread/purin.png';
import rocket from '@/assets/bread/rocket.png';
import tutle from '@/assets/bread/tutle.png';
import loading from '@/assets/loading.gif';

export const LOADING_IMAGES: string = loading;

export const BREAD_IMAGES: { [key: string]: string } = {
    digda,
    fire,
    ghost,
    pika,
    purin,
    rocket,
    tutle,
};

export const BREADS = [
    'digda',
    'fire',
    'ghost',
    'pika',
    'purin',
    'rocket',
    'tutle',
] as const;

type BuyBread = {
    price: number;
    quan: number;
};
export const BUY_BREAD: BuyBread[] = [
    { quan: 1, price: 120 },
    { quan: 10, price: 10000 },
];

export const DEFAULT_BAG = {
    digda: 0,
    fire: 0,
    ghost: 0,
    pika: 0,
    purin: 0,
    rocket: 0,
    tutle: 0,
};

export const DEFAULT_DATA = {
    coin: 0,
    bag: DEFAULT_BAG,
    pokeList: {},
};
