import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteManyDto } from 'src/users/dto/delete-many.dto';

@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) {}

  create(createFormDto: CreateFormDto) {
    return this.prisma.form.create({ data: createFormDto });
  }

  findAll() {
    return this.prisma.form.findMany();
  }

  findAllByUserId(id: number) {
    return this.prisma.form.findMany({
      where: { user_id: id },
      include: { template: true },
    });
  }

  findAllByTemplateId(id: number) {
    return this.prisma.form.findMany({
      where: { template_id: id },
      include: { template: true, user: true },
    });
  }

  findOne(id: number) {
    return this.prisma.form.findUnique({
      where: { id },
      include: {
        template: {
          include: {
            questions: { include: { answer_options: true, answers: true } },
          },
        },
        answers: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.form.delete({ where: { id } });
  }

  removeMany(deleteManyDto: DeleteManyDto) {
    return this.prisma.form.deleteMany({
      where: { id: { in: deleteManyDto.ids } },
    });
  }
}
