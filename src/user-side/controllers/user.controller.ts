import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { User } from 'src/business-logic/entities/user';
import { UserService } from 'src/business-logic/services';
import { AuthService } from 'src/business-logic/services/auth.service';
import { GetUser } from '../decorator';
import { SignIn } from '../dtos/auth/signin.dto';
import { EditUserDto } from '../dtos/user/edit-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: SignIn) {
        return this.authService.signup(dto)
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    signin(@Body() dto: SignIn) {
        return this.authService.signin(dto)
    }

    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }

    @Patch()
    editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
        return this.userService.updateUserById(userId, dto);
    }
}