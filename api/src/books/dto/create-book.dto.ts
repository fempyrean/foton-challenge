import { User } from 'src/users/user.entity';

export interface CreateBookDTO {
  name: string;
  author: string;
  description: string;
  createdBy: Partial<User>;
  cover: string;
}
