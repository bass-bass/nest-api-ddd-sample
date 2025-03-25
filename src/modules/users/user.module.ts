import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entity/user.entity';
import { UserController } from './presentation/controller/user.controller';
import { UserService } from './application/service/user.service';
import { UserRepository } from './infrastructure/persistence/user.repository.impl';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',  // メモリ内データベースを使用
        entities: [User],
        synchronize: true,  // アプリケーション起動時にデータベースを同期
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})

export class UserModule {}
