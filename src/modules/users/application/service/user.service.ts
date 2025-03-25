import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/persistence/user.repository.impl';
import { User } from '../../domain/entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(name: string, email: string): Promise<User> {
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    return this.userRepository.save(newUser);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.delete(id);
  }
}

