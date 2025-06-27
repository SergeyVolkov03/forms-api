import { Module } from '@nestjs/common';
import { AnswerOptionService } from './answer-options.service';
import { AnswerOptionController } from './answer-options.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnswerOptionController],
  providers: [AnswerOptionService],
  imports: [PrismaModule],
})
export class AnswerOptionModule {}
