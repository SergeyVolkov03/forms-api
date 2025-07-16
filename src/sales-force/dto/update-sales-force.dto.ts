import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSalesForceDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  birthDate: string;
}
