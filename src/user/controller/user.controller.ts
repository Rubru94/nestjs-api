import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): UserDto[] {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: UserDto): UserDto {
    return this.userService.create(user);
  }
}
