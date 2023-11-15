import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { GpsService } from './gps.service';
import { GpsDto } from './dto/gps.dto';

@Controller('gps')
export class GpsController {
  constructor(private readonly todoService: GpsService) {}

  @Post()
  create(@Body() dto: GpsDto) {
    return this.todoService.create(dto);
  }

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') deviceId: string) {
    return this.todoService.getById(deviceId);
  }

  @Put(':id')
  update(@Param('id') deviceId: string, @Body() dto: GpsDto) {
    return this.todoService.update(deviceId, dto);
  }

  @Delete(':id')
  delete(@Param('id') deviceId: string) {
    return this.todoService.delete(deviceId);
  }
}
