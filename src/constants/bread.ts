import digda from '../../public/bread/digda.png';
import fire from '../../public/bread/fire.png';
import ghost from '../../public/bread/ghost.png';
import pika from '../../public/bread/pika.png';
import purin from '../../public/bread/purin.png';
import rocket from '../../public/bread/rocket.png';
import tutle from '../../public/bread/tutle.png';
import { BuyBread, BreadImages } from '../types';

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
