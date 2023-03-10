import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/offers')
  async getOffers(): Promise<string> {
    return await this.appService.getOffersAsync();
  }

  @Post()
  postHello() : string {
    return this.appService.getHello();
  }
}
