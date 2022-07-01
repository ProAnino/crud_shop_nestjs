import { Caddy } from "src/business-logic/entities/caddy";
import { Item } from "src/business-logic/entities/item";
import { Stock } from "src/business-logic/entities/stock";
import { User } from "src/business-logic/entities/user";
import { CreateStockDto } from "src/user-side/dtos/stock/create-stock.dto";

export class SuperDatabase {
    items?: Array<Item>
    users?: Array<User>
    stocks?: Array<Stock>
    caddys?: Array<Caddy>

    constructor(items?: Array<Item>,
        users?: Array<User>,
        stocks?: Array<Stock>,
        caddys?: Array<Caddy>) {
        this.items = items;
        this.users = users;
        this.stocks = stocks;
        this.caddys = caddys;
    }

}