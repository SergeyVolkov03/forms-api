import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateQuestionsOrderDto } from './dto/update_orders.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.question.create({
      data: createQuestionDto,
      include: { answer_options: true },
    });
  }

  findAllByTemplateId(id: number) {
    return this.prisma.question.findMany({
      where: { template_id: id },
      include: { answer_options: true },
    });
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({
      where: { id },
      include: { answer_options: true },
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.question.update({
      where: { id },
      data: updateQuestionDto,
      include: { answer_options: true },
    });
  }

  updateQuestionsOrder(updateQuestionsOrderDto: UpdateQuestionsOrderDto) {
    return this.prisma.$transaction(async (prisma) => {
      const updatePromises = updateQuestionsOrderDto.questions.map(
        ({ id, order }) =>
          prisma.question.update({
            where: { id },
            data: { order },
            include: { answer_options: true },
          }),
      );

      return Promise.all(updatePromises);
    });
  }

  remove(id: number) {
    return this.prisma.question.delete({
      where: { id },
    });
  }
}
