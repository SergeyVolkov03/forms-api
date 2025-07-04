import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class UpdateQuestionOrderDto {
  @IsNumber()
  id: number;

  @IsNumber()
  order: number;
}

export class UpdateQuestionsOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateQuestionOrderDto)
  questions: UpdateQuestionOrderDto[];
}
