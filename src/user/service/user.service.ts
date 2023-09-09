import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  public users: UserDto[] = [];

  findAll(): UserDto[] {
    return this.users;
  }

  create(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  }
}
