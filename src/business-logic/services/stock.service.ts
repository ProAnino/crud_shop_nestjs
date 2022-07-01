import { Injectable } from '@nestjs/common';
import { SuperDatabase } from 'src/server-side/super-database';
import { SuperDatabaseService } from 'src/server-side/super-database.service';
import { CreateStockDto } from 'src/user-side/dtos/stock/create-stock.dto';

@Injectable()
export class StockService {
    editStockByItemId(itemId: number, quantity: number) {
        throw new Error('Method not implemented.');
    }

    constructor(private db: SuperDatabaseService) { }

    createStock(dto: CreateStockDto) {
        return this.db.createStock(dto);
    }

    getStocks() {
        return this.db.getStocks();
    }

    getStockByItemId(itemId: number) {
        return this.db.getStockByItemId(itemId);
    }

    updateStockByItemId(itemId: number, quantity: number) {
        return this.db.updateStockByItemId(itemId, quantity);
    }

    deleteStockByItemId(itemId: number) {
        return this.db.deleteStockByItemId(itemId);
    }
}
