import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsNumber()
  @IsNotEmpty()
  author_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  topic_id: number;

  @IsString()
  @IsOptional()
  image?: string;
}
