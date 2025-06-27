export class UpdateTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
