import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  is_blocked?: boolean;

  @IsOptional()
  is_admin?: boolean;
}
