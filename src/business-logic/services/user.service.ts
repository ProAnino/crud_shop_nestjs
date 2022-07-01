import { Injectable } from '@nestjs/common';
import { SuperDatabaseService } from 'src/server-side/super-database.service';
import { EditUserDto } from 'src/user-side/dtos/user/edit-user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

    constructor(private db: SuperDatabaseService) { }

    getUserById(userId: number) {
        return this.db.getUserById(userId);
    }

    updateUserById(userId: number, dto: EditUserDto) {
        return this.db.updateUserById(userId, dto);
    }

    deleteUserById(userId: number) {
        return this.db.deleteUserById(userId);
    }
}
