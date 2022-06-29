import { BadRequest } from "src/shared/errors";
import { Item } from "./item"

export class Caddy {
    userId: Number
    items?: Item[]

    private constructor(userId: number, items: Item[]) {
        this.userId = userId;
        this.items = items;
    }

    public static create(userId: number, items: Item[]) {
        if (userId != null) {
            return new Caddy(userId, items);
        }
        throw new BadRequest('Not user id, no caddy');
    }

}