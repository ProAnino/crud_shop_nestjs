import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ItemService } from 'src/business-logic/services';
import { CreateItemDto } from '../dtos/item/create-item.dto';
import { EditItemDto } from '../dtos/item/edit-item.dto';

@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) { }

    @Post('item')
    async createItem(@Body('userId', ParseIntPipe) userId: number, @Body() dto: CreateItemDto) {
        /**
         * Create new item and add it to the stock
         */
        return this.itemService.createItem(userId, dto);
    }

    @Get()
    getItems() {
        return this.itemService.getItems();
    }

    @Get(':id')
    getItemByid(@Param('id', ParseIntPipe) itemId: number) {
        return this.itemService.getItemById(itemId);
    }

    @Patch(':id')
    async editItemByid(@Body('userId', ParseIntPipe) userId: number, @Param('id', ParseIntPipe) itemId: number, dto: EditItemDto) {
        return this.itemService.editItemById(userId, itemId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async deleteItemByid(@Body('userId', ParseIntPipe) userId: number, @Param('id', ParseIntPipe) itemId: number) {
        return this.itemService.deleteItemById(userId, itemId);
    }
}
