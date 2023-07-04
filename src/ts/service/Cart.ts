import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalCost(): number {

        let totalPrice: number = 0;
        for (let i = 0; i < this._items.length; i++) {
            console.log(this._items[i])
            totalPrice = totalPrice + this._items[i].price;
        }
        return totalPrice
    }

    totalDiscounCost(discount: number): number {

        let totalPrice: number = 0;
        
        for (let i = 0; i < this._items.length; i++) {
            console.log(this._items[i])
            totalPrice = totalPrice + this._items[i].price;
        }

        const onePersent: number = totalPrice / 100;
        const disc: number = onePersent * discount;
        return totalPrice - disc
    }

    delet(id: number): Object {
        const filtredCart: Buyable[] = this._items.filter(item => item.id != id)
        return filtredCart
    }
}