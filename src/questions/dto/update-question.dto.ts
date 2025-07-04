import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
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
  @IsBoolean()
  is_displayed?: boolean;

  @IsOptional()
  @IsEnum(QuestionType)
  type?: QuestionType;
}
