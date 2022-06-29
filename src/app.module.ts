import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CaddyController, ItemController, StoreController, UserController } from './user-side/controllers/index';

@Module({
  imports: [],
  controllers: [UserController, ItemController, CaddyController, StoreController],
  providers: [AppService],
})
export class AppModule { }
