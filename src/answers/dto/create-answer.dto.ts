import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateAnswerDto {
  @IsNumber()
  @IsNotEmpty()
  form_id: number;

  @IsNumber()
  @IsNotEmpty()
  question_id: number;

  @IsArray()
  value: string[];
}

export class CreateManyAnswersDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}
