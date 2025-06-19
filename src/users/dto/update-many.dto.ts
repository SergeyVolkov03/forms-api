import { IsArray, IsOptional } from 'class-validator';

export class UpdateManyDto {
  @IsArray()
  ids: number[];

  @IsOptional()
  is_blocked?: boolean;

  @IsOptional()
  is_admin?: boolean;
}
