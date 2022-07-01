import { Injectable } from "@nestjs/common";
import { Item } from "src/business-logic/entities/item";
import { BadRequest } from "src/shared/errors";
import { CreateItemDto } from "src/user-side/dtos/item/create-item.dto";
import { EditItemDto } from "src/user-side/dtos/item/edit-item.dto";
import { CreateStockDto } from "src/user-side/dtos/stock/create-stock.dto";
import { EditUserDto } from "src/user-side/dtos/user/edit-user.dto";
import { SuperDatabase } from "./super-database";

@Injectable()
export class SuperDatabaseService {

    findUserById(userId: number) {
        return 'user with id = ' + userId;
    }
    deleteUserById(userId: number) {
        return 'user with id = ' + userId + ' deleted.';
    }
    updateUserById(userId: number, dto: EditUserDto) {
        return 'user with id = ' + userId + ' updated on ' + { ...dto };
    }
    createUser(email: string, hash: string) {
        return 'user with email = ' + email + ' and hash = ' + hash + ' created !';
    }
    findUserByEmail(email: string) {
        return 'user with email = ' + email;
    }

    deleteStockByItemId(itemId: number) {
        return 'stock of item with id = ' + itemId + ' deleted.';
    }
    updateStockByItemId(itemId: number, quantity: number) {
        return 'stock of item with id = ' + itemId + ' incremented by ' + quantity;
    }
    getStockByItemId(itemId: number) {
        return 'stock of item with id = ' + itemId;
    }
    getStocks() {
        return 'all stocks returned';
    }
    createStock(dto: CreateStockDto) {
        return 'Stock created ! item with id = ' + dto.itemId + ' has ' + dto.count + ' in stock !';
    }

    createItem(dto: CreateItemDto) {
        return 'Item created !';
    }

    getUserById(userId: number) {
        return 'user with id = ' + userId;
    }

    getCaddyByUserId(userId: number) {
        return 'caddy with id = ' + userId;
    }



    getItemById(itemId: number) {
        return 'item with id = ' + itemId;
    }

    getItems() {
        return 'all items returned';
    }

    editItemById(itemId: number, dto: EditItemDto) {
        /*
                const item = this.items.find(item => item.id = itemId);
                if (item == null) {
                    throw new BadRequest('Bad item id')
                }
        
                const updatedItem = this.items.map(item => item.id == itemId ? {
                    ...item, ...dto
                } : item);
        */
        return 'item with id = ' + itemId + ' updated';
    }

    deleteItemById(itemId: number) {
        /*
                const item = this.items.find(item => item.id = itemId);
                if (item != null) {
                    const index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                }*/

        return 'item deleted'
    }


    getCaddy(userId: number) {
        return 'caddy of user with id = ' + userId;
    }

    addItemIntoCaddy(userId: number, itemId: number) {
        return 'add item with id = ' + itemId + ' to caddy of user with id = ' + userId;
    }

    deleteItemFromCaddy(userId: number, itemId: number) {
        return 'drop item with id = ' + itemId + ' of caddy of user with id = ' + userId;
    }

    async deleteCaddyByUserId(userId: number) {
        return 'drop caddy of user with id = ' + userId;
    }
}