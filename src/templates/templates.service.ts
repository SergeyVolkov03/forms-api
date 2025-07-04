import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteManyDto } from 'src/users/dto/delete-many.dto';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  create(createTemplateDto: CreateTemplateDto) {
    const { tags, ...data } = createTemplateDto;
    if (tags) {
      return this.prisma.template.create({
        data: {
          ...data,
          tags: {
            connect: tags.map((id) => ({ id })),
          },
        },
        include: { tags: true, topic: true, fillers: true, questions: true },
      });
    } else {
      return this.prisma.template.create({
        data: data,
        include: { tags: true, topic: true, fillers: true, questions: true },
      });
    }
  }

  findAll() {
    return this.prisma.template.findMany({
      include: { tags: true, topic: true, fillers: true, questions: true },
    });
  }

  async getLatestTemplates(limit: number) {
    return this.prisma.template.findMany({
      take: limit,
      orderBy: {
        created_at: 'desc',
      },
      select: {
        id: true,
        title: true,
        description: true,
        author: true,
      },
    });
  }

  async getPopularTemplates(limit: number) {
    return this.prisma.template.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        author: true,
        forms: true,
      },
      orderBy: {
        forms: {
          _count: 'desc',
        },
      },
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prisma.template.findUnique({
      where: { id },
      include: {
        tags: true,
        topic: true,
        fillers: true,
        questions: true,
      },
    });
  }

  findAllByAuthor(id: number) {
    return this.prisma.template.findMany({
      where: { author_id: id },
      include: { tags: true, topic: true, fillers: true, questions: true },
    });
  }

  findAllByTopic(id: number) {
    return this.prisma.template.findMany({
      where: { topic_id: id },
      include: { tags: true, topic: true, fillers: true, questions: true },
    });
  }

  findAllByTags(ids: number[]) {
    return this.prisma.template.findMany({
      where: {
        tags: {
          some: {
            id: { in: ids },
          },
        },
      },
      include: {
        tags: true,
        topic: true,
        fillers: true,
        questions: true,
      },
    });
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    const { tags, fillers, ...data } = updateTemplateDto;
    if (tags) {
      return this.prisma.template.update({
        where: { id },
        data: {
          ...data,
          tags: {
            set: [],
            connect: tags.map((id) => ({ id })),
          },
        },
        include: { tags: true, topic: true, fillers: true, questions: true },
      });
    }
    if (fillers) {
      return this.prisma.template.update({
        where: { id },
        data: {
          ...data,
          fillers: {
            set: [],
            connect: fillers.map((id) => ({ id })),
          },
        },
        include: { tags: true, topic: true, fillers: true, questions: true },
      });
    }

    return this.prisma.template.update({
      where: { id },
      data: data,
      include: { tags: true, topic: true, fillers: true, questions: true },
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
