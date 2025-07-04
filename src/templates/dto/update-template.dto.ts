import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTemplateDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  topic_id?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsArray()
  @IsOptional()
  tags?: number[];

  @IsArray()
  @IsOptional()
  fillers?: number[];

  @IsBoolean()
  @IsOptional()
  is_public?: boolean;
}
