import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  public readonly name: string;

  @IsNumber()
  @IsOptional()
  public readonly age?: number;

  @IsString()
  public readonly country: string;

  @IsEmail()
  @IsOptional()
  public readonly email?: string;
}
