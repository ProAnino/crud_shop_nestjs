import { BadRequest } from "src/shared/errors/bad-request";
import { Item } from "./item";


export class Stock {
    item: Item
    count: number

    constructor(item: Item,
        count: number) {
        this.item = item;
        this.count = count;
    }

    public static create(item: Item,
        count: number) {
        if (item == null) {
            throw new BadRequest('No item, no stock');
        }

        return new Stock(item, count == null ? 0 : count)
    }
}