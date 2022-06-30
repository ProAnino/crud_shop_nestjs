import { Module } from '@nestjs/common';
import { ItemService, } from 'src/business-logic/services';
import { ItemController } from '../controllers';


@Module({
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule { }