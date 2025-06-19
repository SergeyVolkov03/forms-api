import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
