import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnswerOptionDto {
  @IsNotEmpty()
  @IsString()
  value: string;

  @IsNotEmpty()
  @IsNumber()
  question_Id: number;
}
