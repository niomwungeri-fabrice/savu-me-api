import { AppService } from './app.service';
import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Object {
    this.logger.log("Hello World Controller!");
    return this.appService.getHello();
  }
}
