import { Caddy } from "src/business-logic/entities/caddy";
import { Item } from "src/business-logic/entities/item";
import { Stock } from "src/business-logic/entities/stock";
import { User } from "src/business-logic/entities/user";

export class SuperDatabase {
    items?: Item[]
    users?: User[]
    stocks?: Stock[]
    caddys?: Caddy[]

    private constructor(items: Item[],
        users: User[],
        stocks: Stock[],
        caddys: Caddy[]) {
        this.items = items;
        this.users = users;
        this.stocks = stocks;
        this.caddys = caddys;
    }

    public initDb() {
        const firstItem = Item.create(1, 'hibou', '', 123);
        const firstUser = User.create(1, 'Marc', 'Zuzu', 'marc.zuzu@fb.com');

        return new SuperDatabase(
            [firstItem],
            [firstUser],
            [Stock.create(firstItem, 200)],
            [Caddy.create(firstUser.id, [firstItem, firstItem, firstItem])]
        );
    }

    private getUserById(userId: number) {
        return this.users.find(user => user.id == userId);
    }

    private getItemById(itemId: number) {
        return this.items.find(item => item.id == itemId);
    }

    private getCaddyByUserId(userId: number) {
        return this.caddys.find(caddy => caddy.userId == userId);
    }

}