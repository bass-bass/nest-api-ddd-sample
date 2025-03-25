import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../../application/service/user.service';
import { User } from '../../domain/entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Get('')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post('')
  async createUser(@Body() body: { name: string; email: string }): Promise<User> {
    return this.userService.createUser(body.name, body.email);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
