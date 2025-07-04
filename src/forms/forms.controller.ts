import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { DeleteManyDto } from 'src/users/dto/delete-many.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formsService.create(createFormDto);
  }

  @Get()
  findAll() {
    return this.formsService.findAll();
  }

  @Get('/user/:id')
  findAllByUserId(@Param('id') id: string) {
    return this.formsService.findAllByUserId(+id);
  }

  @Get('/template/:id')
  findAllByTemplateId(@Param('id') id: string) {
    return this.formsService.findAllByTemplateId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formsService.remove(+id);
  }

  @Delete()
  async removeMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.formsService.removeMany(deleteManyDto);
  }
}
