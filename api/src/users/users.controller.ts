import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async registerUser(@Body() body: CreateUserDTO) {
    return this.usersService.register(body);
  }
}

export { UsersController };
