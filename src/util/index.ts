export const priceFormat = (number: number) =>
    new Intl.NumberFormat('ko-kr').format(number);

export const makeRandom = () => Math.floor(Math.random() * 1000);

export const makePokeId = (limit: number) =>
    Math.floor(Math.random() * limit) + 1;

export const getPercent = (number: number, base: number) =>
    ((number / base) * 100).toFixed(2);
