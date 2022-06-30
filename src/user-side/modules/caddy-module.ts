import { Module } from '@nestjs/common';
import { CaddyService } from 'src/business-logic/services';
import { CaddyController } from '../controllers';


@Module({
    controllers: [CaddyController],
    providers: [CaddyService]
})
export class CaddyModule { }