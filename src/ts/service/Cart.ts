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

        const totalPrice: number = this._items.reduce((acc, item) => {
            acc += item.price;
            return acc
          }, 0)

        return totalPrice
    }

    totalDiscounCost(discount: number): number {

        const onePersent: number = this.totalCost() / 100;
        const disc: number = onePersent * discount;
        return this.totalCost() - disc
    }

    deleteById(id: number): Buyable[]  {
        return this._items = this._items.filter(item => item.id !== id)
    }
}