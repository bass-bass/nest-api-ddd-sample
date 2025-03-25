import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [HelloModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
