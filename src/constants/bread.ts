import digda from '@/assets/bread/digda.png';
import fire from '@/assets/bread/fire.png';
import ghost from '@/assets/bread/ghost.png';
import pika from '@/assets/bread/pika.png';
import purin from '@/assets/bread/purin.png';
import rocket from '@/assets/bread/rocket.png';
import tutle from '@/assets/bread/tutle.png';
import { BreadImages, BuyBread } from '@/types';

export const BREAD_IMAGES: BreadImages = {
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

export const BUY_BREAD: BuyBread[] = [
    { quan: 1, price: 120 },
    { quan: 10, price: 10000 },
];
