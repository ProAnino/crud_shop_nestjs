import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { StockService } from 'src/business-logic/services';
import { CreateStockDto } from './dtos/stock/create-stock.dto';

@Controller('stocks')
export class StockController {

    constructor(private stockService: StockService) { }

    @Post('stock')
    async createStock(@Body('userId', ParseIntPipe) userId: number, @Body() dto: CreateStockDto) {
        /**
         * Only admin can alter stock
         * 
         * TODO : Check if user is admin
         */
        return this.stockService.createStock(dto);
    }

    @Get()
    getStocks(@Body('userId', ParseIntPipe) userId: number) {
        /**
         * Only admin can alter stock
         * 
         * TODO : Check if user is admin
         */
        return this.stockService.getStocks();
    }

    @Get(':id')
    getStockByItemId(@Param('id', ParseIntPipe) itemId: number) {
        /**
         * Only admin can alter stock
         * 
         * TODO : Check if user is admin
         */
        return this.stockService.getStockByItemId(itemId);
    }

    @Patch(':id')
    async editStockByItemId(@Body('userId', ParseIntPipe) userId: number, @Param('id', ParseIntPipe) itemId: number, quantity: number) {
        /**
         * Only admin can alter stock
         * 
         * TODO : Check if user is admin
         */
        return this.stockService.editStockByItemId(itemId, quantity);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async deleteStockByItemId(@Body('userId', ParseIntPipe) userId: number, @Param('id', ParseIntPipe) itemId: number) {
        /**
         * Only admin can alter stock
         * 
         * TODO : Check if user is admin
         */
        return this.stockService.deleteStockByItemId(itemId);
    }
}
