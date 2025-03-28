import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../../application/service/hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
