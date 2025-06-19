import { IsNumber, IsOptional, IsString } from 'class-validator';

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
}
