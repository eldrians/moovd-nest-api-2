import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Post()
  create(@Body() dto: UserDto) {
    return this.todoService.create(dto);
  }

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':email')
  getByEmail(@Param('email') email: string) {
    return this.todoService.getByEmail(email);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UserDto) {
    return this.todoService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
