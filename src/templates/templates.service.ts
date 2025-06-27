import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteManyDto } from 'src/users/dto/delete-many.dto';

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

  findAllByTags(tagIds: number[]) {
    return this.prisma.template.findMany({
      where: {
        tags: {
          some: {
            id: { in: tagIds },
          },
        },
      },
      include: {
        tags: true,
      },
    });
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return this.prisma.template.update({
      where: { id },
      data: updateTemplateDto,
    });
  }

  removeMany(deleteManyDto: DeleteManyDto) {
    return this.prisma.template.deleteMany({
      where: { id: { in: deleteManyDto.ids } },
    });
  }

  remove(id: number) {
    return this.prisma.template.delete({ where: { id } });
  }
}
