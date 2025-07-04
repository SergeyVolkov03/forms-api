import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class UpdateAnswerDto {
  @IsNumber()
  id: number;

  @IsArray()
  value: string[];
}

export class UpdateManyAnswersDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAnswerDto)
  answers: UpdateAnswerDto[];
}
