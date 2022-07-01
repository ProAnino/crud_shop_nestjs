import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/business-logic/services/auth.service';
import { JwtStrategy } from 'src/business-logic/strategy';


@Module({
    imports: [JwtModule.register({})],
    providers: [AuthService]
})
export class AuthModule { }