import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSalesForceDto {
  @IsString()
  @IsNotEmpty()
  accountName: string;
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  birthDate: string;
}
