import { Injectable } from '@nestjs/common';
import { CreateAnswerDto, CreateManyAnswersDto } from './dto/create-answer.dto';
import { UpdateAnswerDto, UpdateManyAnswersDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private prisma: PrismaService) {}

  create(createAnswerDto: CreateAnswerDto) {
    return this.prisma.answer.create({ data: createAnswerDto });
  }

  findAll() {
    return this.prisma.answer.findMany();
  }

  findOne(id: number) {
    return this.prisma.answer.findUnique({ where: { id } });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prisma.answer.update({ where: { id }, data: updateAnswerDto });
  }

  async upsertMany(createManyAnswersDto: CreateManyAnswersDto) {
    const { answers } = createManyAnswersDto;

    return this.prisma.$transaction(async (prisma) => {
      await Promise.all(
        answers.map((answer) =>
          prisma.answer.upsert({
            where: {
              form_id_question_id: {
                form_id: answer.form_id,
                question_id: answer.question_id,
              },
            },
            update: { value: answer.value },
            create: answer,
          }),
        ),
      );
    });
  }

  remove(id: number) {
    return this.prisma.answer.delete({ where: { id } });
  }
}
