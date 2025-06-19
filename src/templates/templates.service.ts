import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  create(createTemplateDto: CreateTemplateDto) {
    return this.prisma.template.create({
      data: createTemplateDto,
    });
  }

  findAll() {
    return this.prisma.template.findMany();
  }

  findOne(id: number) {
    return this.prisma.template.findUnique({ where: { id } });
  }

  findAllByAuthor(id: number) {
    return this.prisma.template.findMany({ where: { author_id: id } });
  }

  findAllByTopic(id: number) {
    return this.prisma.template.findMany({ where: { topic_id: id } });
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return this.prisma.template.update({
      where: { id },
      data: updateTemplateDto,
    });
  }

  remove(id: number) {
    return this.prisma.template.delete({ where: { id } });
  }
}
