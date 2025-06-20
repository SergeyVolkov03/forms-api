import { Module } from '@nestjs/common';
import { AnswerOptionService } from './answer-options.service';
import { AnswerOptionController } from './answer-options.controller';

@Module({
  controllers: [AnswerOptionController],
  providers: [AnswerOptionService],
})
export class AnswerOptionModule {}
