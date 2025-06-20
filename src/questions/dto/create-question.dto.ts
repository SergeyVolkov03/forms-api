import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { QuestionType } from '../types/question-type';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsNumber()
  template_Id: number;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(QuestionType)
  type: QuestionType;
}
