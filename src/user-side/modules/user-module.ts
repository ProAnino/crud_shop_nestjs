import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from 'src/business-logic/services';
import { AuthService } from 'src/business-logic/services/auth.service';
import { UserController } from '../controllers';


@Module({
    controllers: [UserController],
    providers: [UserService, AuthService, JwtService]
})
export class UserModule {
    
 }