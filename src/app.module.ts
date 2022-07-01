import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule, ItemModule, CaddyModule, StockModule } from './user-side/modules';
import { SuperDatabaseModule } from './user-side/modules/database-module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, ItemModule, CaddyModule, StockModule, SuperDatabaseModule],
})
export class AppModule { }
