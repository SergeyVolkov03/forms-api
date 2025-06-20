import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { QuestionType } from '../types/question-type';

export class UpdateQuestionDto {
  @IsOptional()
  @IsNumber()
  order?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(QuestionType)
  type?: QuestionType;
}
