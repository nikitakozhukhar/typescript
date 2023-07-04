import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
		readonly year: number,
		readonly country: string,
		readonly tagline: string,
		readonly style: string,
		readonly duration: string,
    ) { }
}