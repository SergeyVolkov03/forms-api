import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsNumber()
  @IsNotEmpty()
  author_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  topic_id: number;

  @IsOptional()
  @IsString()
  image?: string;
}
