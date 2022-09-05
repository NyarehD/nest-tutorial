import { IsArray, IsString } from 'class-validator';

export class CreateLaptopsDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

  @IsArray()
  readonly specs: string[];
}