import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTemplateDto {
  @IsNumber()
  @IsNotEmpty()
  author_id: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  topic_id: number;

  @IsOptional()
  @IsString()
  image?: string;

  @IsArray()
  @IsOptional()
  tags?: number[];
}
