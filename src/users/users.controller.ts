import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteManyDto } from './dto/delete-many.dto';
import { UpdateManyDto } from './dto/update-many.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get('search/email')
  searchByEmail(@Query('query') query: string) {
    return this.usersService.searchByEmail(query);
  }

  @Get('search/username')
  searchByUserName(@Query('query') query: string) {
    return this.usersService.searchByUsername(query);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return await this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateMany(@Body() updateManyDto: UpdateManyDto) {
    return await this.usersService.updateMany(updateManyDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.remove(id);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async removeMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.usersService.removeMany(deleteManyDto);
  }
}
