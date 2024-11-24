import { Controller, Get, Param } from '@nestjs/common';
import { AppService, getCommsParams, getCommsResponse } from './app.service';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:id')
  getComms(@Param() params: getCommsParams): getCommsResponse {
    return this.appService.getComms(params);
  }
}
