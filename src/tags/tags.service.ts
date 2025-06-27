import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    const tag = await this.prisma.tag.findUnique({
      where: { name: createTagDto.name },
    });

    if (tag) return tag;

    return this.prisma.tag.create({
      data: { name: createTagDto.name },
    });
  }

  async findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  async search(query: string) {
    return this.prisma.tag.findMany({
      where: {
        name: {
          startsWith: query,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({ where: { id }, data: updateTagDto });
  }

  async remove(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
