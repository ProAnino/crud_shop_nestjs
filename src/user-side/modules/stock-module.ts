import { Module } from '@nestjs/common';
import { StockService } from 'src/business-logic/services';
import { StockController } from '../controllers';


@Module({
    controllers: [StockController],
    providers: [StockService]
})
export class StockModule { }