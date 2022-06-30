import { Global, Module } from '@nestjs/common';
import { SuperDatabaseService } from 'src/server-side/super-database.service';

@Global()
@Module({
    providers: [SuperDatabaseService],
    exports: [SuperDatabaseService],
})
export class SuperDatabaseModule { }