import { Controller } from '@nestjs/common';
import { UserService } from 'src/business-logic/services';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
}
