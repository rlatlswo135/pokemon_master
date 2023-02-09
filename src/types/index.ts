import { BREADS } from '@constants/bread';

export type OneGenBreads =
    | 'digda'
    | 'fire'
    | 'ghost'
    | 'pika'
    | 'purin'
    | 'rocket'
    | 'tutle';

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

export type BreadImages = {
    [key in OneGenBreads]: string;
};

export type MyPokeListValue = Record<number, number>;

export type DefaultData = {
    coin: number;
    bag: BagValue;
    pokeList: { [key: number]: number };
};

export type NameAndUrl = {
    name: string;
    url: string;
};
export type PokemonAPI = {
    abilities: string[];
    id: number;
    main_region: NameAndUrl;
    moves: NameAndUrl[];
    name: string;
    names: {
        language: NameAndUrl;
        name: string;
    }[];
    pokemon_species: NameAndUrl[];
    types: NameAndUrl[];
    version_groups: NameAndUrl[];
};

export type PageInfo = {
    USER: string;
    BREAD: number;
    POKEMON: string;
};

export type GetBread = (quan: number, price: number) => void;
export type BuyBreadInfo = {
    quan: number;
    price: number;
}[];
