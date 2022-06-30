import { Module } from '@nestjs/common';
import { UserModule, ItemModule, CaddyModule, StockModule } from './user-side/modules';
import { SuperDatabaseModule } from './user-side/modules/database-module';

@Module({
  imports: [UserModule, ItemModule, CaddyModule, StockModule, SuperDatabaseModule],
})
export class AppModule { }
