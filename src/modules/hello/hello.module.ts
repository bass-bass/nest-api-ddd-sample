import { Module } from '@nestjs/common';
import { HelloController } from './presentation/controller/hello.controller';
import { HelloService } from './application/service/hello.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
