import { ForbiddenException, Injectable, Post } from "@nestjs/common";
import * as argon from 'argon2';
import { ConfigService } from "@nestjs/config";
import { SuperDatabaseService } from "src/server-side/super-database.service";
import { JwtService } from "@nestjs/jwt";
import { SignIn } from "src/user-side/dtos/auth/signin.dto";

@Injectable()
export class AuthService {
  constructor(private db: SuperDatabaseService, private jwt: JwtService, private config: ConfigService) { }

  async signup(dto: SignIn) {
    //check if email already exists
    const userByEmail = await this.db.findUserByEmail(dto.email);
    if (userByEmail) {
      throw new ForbiddenException('Email already has an account')
    }
    //generate the password hash
    const hash = await argon.hash(dto.password);
    //save the new user in the db
    const user = await this.db.createUser(dto.email, hash)
    // TODO return the saved user
    //return this.signToken(user.id, user.email)

    return this.signToken(123, 'email@email.com')
  }

  async signin(dto: SignIn) {
    //find user by email
    const user = await this.db.findUserByEmail(dto.email);
    if (!user) throw new ForbiddenException('Credentials incorrect');
    //TODO compare password
    const isCorrectPassword = true //await argon.verify(user.hash, dto.password);
    if (!isCorrectPassword) {
      throw new ForbiddenException('Credentials incorrect')
    };
    //TODO send back user
    //return this.signToken(user.id, user.email)
    return this.signToken(123, 'email@email.com')

  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email
    }
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '25m', secret: secret,
    });
    return {
      access_token: token
    }
  }
}
