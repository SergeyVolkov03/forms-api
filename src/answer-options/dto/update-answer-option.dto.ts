import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAnswerOptionDto {
  @IsNotEmpty()
  @IsString()
  value: string;
}
