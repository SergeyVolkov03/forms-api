import { Injectable } from '@nestjs/common';
import { CreateAnswerOptionDto } from './dto/create-answer-option.dto';
import { UpdateAnswerOptionDto } from './dto/update-answer-option.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerOptionService {
  constructor(private prisma: PrismaService) {}

  create(createAnswerOptionDto: CreateAnswerOptionDto) {
    return this.prisma.answerOption.create({ data: createAnswerOptionDto });
  }

  findAllByQuestionId(id: number) {
    return this.prisma.answerOption.findMany({ where: { question_Id: id } });
  }

  findOne(id: number) {
    return this.prisma.answerOption.findUnique({ where: { id } });
  }

  update(id: number, updateAnswerOptionDto: UpdateAnswerOptionDto) {
    return this.prisma.answerOption.update({
      where: { id },
      data: updateAnswerOptionDto,
    });
  }

  remove(id: number) {
    return this.prisma.answerOption.delete({ where: { id } });
  }
}
