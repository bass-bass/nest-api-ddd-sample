import { User } from '../entity/user.entity';

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  delete(id: number): Promise<void>;
}
