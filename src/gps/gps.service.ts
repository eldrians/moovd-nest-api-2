import { Injectable } from '@nestjs/common';
import { Gps } from './gps.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GpsDto } from './dto/gps.dto';

@Injectable()
export class GpsService {
  constructor(
    @InjectRepository(Gps) private readonly todoRepository: Repository<Gps>,
  ) {}

  async create(dto: GpsDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  getAll() {
    return this.todoRepository.find();
  }

  getById(deviceId: string) {
    return this.todoRepository.find({ where: { device_id: deviceId } });
  }

  async update(deviceId: string, dto: GpsDto) {
    const data = await this.todoRepository.findOne({
      where: { device_id: deviceId },
    });

    Object.assign(data, dto);

    return await this.todoRepository.save(data);
  }

  async delete(deviceId: string) {
    const data = await this.todoRepository.findOne({
      where: { device_id: deviceId },
    });
    return await this.todoRepository.remove(data);
  }
}
