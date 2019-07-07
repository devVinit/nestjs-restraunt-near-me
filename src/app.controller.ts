import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('geocode')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':lat/:long')
  async getLocations(@Param() params): Promise<object[]> {
    return await this.appService.getLocations(params);
  }
}
