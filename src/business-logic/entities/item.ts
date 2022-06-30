import { BadRequest } from "src/shared/errors";


export class Item {
    id: number
    label: string
    description?: string
    price: number

    constructor(
        id: number,
        label: string,
        description: string,
        price: number) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.price = price;
    }

    public static create(id: number,
        label: string,
        description: string,
        price: number) {
        if (id == null) {
            throw new BadRequest('No id, no item')
        }
        if (label == null) {
            throw new BadRequest('No label, no item')
        }
        if (description == null) {
            throw new BadRequest('No description, no item')
        }
        return new Item(id, label, description, price);
    }
}