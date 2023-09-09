import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }
}
