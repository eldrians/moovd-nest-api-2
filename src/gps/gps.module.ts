import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gps } from './gps.entity';
import { GpsController } from './gps.controller';
import { GpsService } from './gps.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gps])],
  controllers: [GpsController],
  providers: [GpsService],
})
export class GpsModule {}
