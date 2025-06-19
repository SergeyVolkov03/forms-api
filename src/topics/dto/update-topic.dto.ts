import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTopicDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
