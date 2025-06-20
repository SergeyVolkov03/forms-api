import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}
  create(createLikeDto: CreateLikeDto) {
    return this.prisma.like.create({ data: createLikeDto });
  }

  findAllByTemplateId(id: number) {
    return this.prisma.like.findMany({ where: { template_id: id } });
  }

  findAllByUserId(id: number) {
    return this.prisma.like.findMany({ where: { user_id: id } });
  }

  findOneByUserIdAndTemplateId(user_id: number, template_id: number) {
    return this.prisma.like.findMany({ where: { user_id, template_id } });
  }

  remove(id: number) {
    return this.prisma.like.delete({ where: { id } });
  }
}
