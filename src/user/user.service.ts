import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly todoRepository: Repository<User>,
  ) {}

  async create(dto: UserDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  getAll() {
    return this.todoRepository.find();
  }

  getByEmail(email: string) {
    return this.todoRepository.find({ where: { email: email } });
  }

  async update(id: number, dto: UserDto) {
    const data = await this.todoRepository.findOne({
      where: { id: id },
    });

    Object.assign(data, dto);

    return await this.todoRepository.save(data);
  }

  async delete(id: number) {
    const data = await this.todoRepository.findOne({
      where: { id: id },
    });
    return await this.todoRepository.remove(data);
  }
}
