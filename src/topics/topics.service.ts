import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}
  create(createTopicDto: CreateTopicDto) {
    return this.prisma.topic.create({ data: createTopicDto });
  }

  findAll() {
    return this.prisma.topic.findMany();
  }

  findOne(id: number) {
    return this.prisma.topic.findUnique({ where: { id } });
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return this.prisma.topic.update({ where: { id }, data: updateTopicDto });
  }

  async remove(id: number) {
    try {
      return await this.prisma.topic.delete({ where: { id } });
    } catch (e) {
      return e.meta;
    }
  }
}
