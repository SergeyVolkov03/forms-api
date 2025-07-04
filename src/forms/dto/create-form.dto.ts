import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFormDto {
  @IsNumber()
  @IsNotEmpty()
  template_id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
