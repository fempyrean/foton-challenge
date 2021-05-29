import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from 'src/users/user.entity';

@Entity('book')
class Book {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  author: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  cover: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
export { Book };
