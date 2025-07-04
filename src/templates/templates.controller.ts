import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { DeleteManyDto } from 'src/users/dto/delete-many.dto';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get('latest')
  async getLatestTemplates(@Query('limit') limit: string) {
    return this.templatesService.getLatestTemplates(+limit);
  }

  @Get('popular')
  async getPopularTemplates(@Query('limit') limit: string) {
    return this.templatesService.getPopularTemplates(+limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(+id);
  }

  @Get('/user/:id')
  findAllByAuthor(@Param('id') id: string) {
    return this.templatesService.findAllByAuthor(+id);
  }

  @Get('/topic/:id')
  findAllByTopic(@Param('id') id: string) {
    return this.templatesService.findAllByTopic(+id);
  }

  @Post('/tags')
  async searchByTags(@Body() body: { ids: number[] }) {
    return this.templatesService.findAllByTags(body.ids);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
  ) {
    return this.templatesService.update(+id, updateTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(+id);
  }

  @Delete()
  async removeMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.templatesService.removeMany(deleteManyDto);
  }
}
