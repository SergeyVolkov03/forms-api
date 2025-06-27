import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { QuestionType } from '../types/question-type';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsNumber()
  template_id: number;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsBoolean()
  is_displayed: boolean;

  @IsNotEmpty()
  @IsEnum(QuestionType)
  type: QuestionType;
}
