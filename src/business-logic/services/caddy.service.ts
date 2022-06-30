import { Injectable } from '@nestjs/common';
import { SuperDatabaseService } from 'src/server-side/super-database.service';

@Injectable()
export class CaddyService {

    constructor(private db: SuperDatabaseService) { }

    getCaddy(userId: number) {
        return this.db.getCaddy(userId);
    }

    async addItem(userId: number, itemId: number) {
        /**
         * TODO: Checkif there is enough item in stock
         * 
         * - if yes remove from stock and add to caddy
         * - if no throw new NoStockError
         */
        return this.db.addItemIntoCaddy(userId, itemId);
    }

    async deleteItemFromCaddy(userId: number, itemId: number) {
        //TODO : Drop item from caddy and add it back to stock
        return this.db.deleteItemFromCaddy(userId, itemId);
    }

    async deleteCaddyByUserId(userId: number) {
        return this.db.deleteCaddyByUserId(userId);
    }
}