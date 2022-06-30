import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CaddyService } from 'src/business-logic/services';

@Controller('caddys')
export class CaddyController {

    constructor(private caddyService: CaddyService) { }

    @Get()
    async getCaddy(@Body('userId', ParseIntPipe) userId: number) {
        return this.caddyService.getCaddy(userId);
    }

    @Post('item')
    async addItem(@Body('userId', ParseIntPipe) userId: number, @Body('itemId', ParseIntPipe) itemId: number) {
        return this.caddyService.addItem(userId, itemId);
    }

    @Patch(':id')
    async deleteItemFromCaddy(@Body('userId', ParseIntPipe) userId: number, @Param('itemId', ParseIntPipe) itemId: number) {
        return this.caddyService.deleteItemFromCaddy(userId, itemId);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    async deleteCaddyByUserId(@Body('userId', ParseIntPipe) userId: number) {
        return this.caddyService.deleteCaddyByUserId(userId);
    }
}
