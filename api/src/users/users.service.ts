import { BadRequestException, Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(data: CreateUserDTO): Promise<User> {
    try {
      const { email } = data;

      const existingUser = await this.userRepository.findOne({
        where: { email },
      });
      if (existingUser) throw new BadRequestException('E-mail already in use.');

      const user = this.userRepository.create(data);
      await this.userRepository.save(user);

      return user;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
}
