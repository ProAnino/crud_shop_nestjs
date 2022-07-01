import { ForbiddenException, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { SuperDatabaseService } from 'src/server-side/super-database.service';
import { CreateItemDto } from 'src/user-side/dtos/item/create-item.dto';
import { EditItemDto } from 'src/user-side/dtos/item/edit-item.dto';

@Injectable()
export class ItemService {

    constructor(private db: SuperDatabaseService) { }

    async createItem(userId: number, dto: CreateItemDto) {
        const user = true//await this.db.getUserById(userId);
        if (!user) {
            throw new ForbiddenException('Authorization denied');
        }

        //Create item
        const item = await this.db.createItem(dto);
        const itemId = 123;
        //Check if item exists in the stock, if yes stock +1 else create stock and count = 1
        const isStock = true//await this.db.getStock(item.id);

        await this.db.updateStockByItemId(itemId, 1);

        return item;

    }

    getItems() {
        return this.db.getItems();
    }


    getItemById(@Param('id', ParseIntPipe) itemId: number) {
        return this.db.getItemById(itemId);
    }

    async editItemById(userId: number, @Param('id', ParseIntPipe) itemId: number, dto: EditItemDto) {
        const user = true//await this.db.getUserById(userId);

        if (!user) {
            throw new ForbiddenException('Authorization denied');
        }

        return this.db.editItemById(itemId, dto);
    }

    async deleteItemById(userId: number, @Param('id', ParseIntPipe) itemId: number) {
        const user = true//await this.db.getUserById(userId);

        if (!user) {
            throw new ForbiddenException('Authorization denied');
        }

        return this.db.deleteItemById(itemId);
    }
}
