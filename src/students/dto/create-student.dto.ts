import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString({ message: 'Name can only accept strings' })
  public readonly name: string;

  @IsNumber()
  @Min(10, { message: 'Age cannot be less than 10' })
  @Max(100, { message: 'Age cannot exceed 100' })
  @IsOptional({ message: 'Age can only be a number' })
  public readonly age?: number;

  @IsString({ message: 'Country should be only in string(e.g. Myanmar, Japan)' })
  public readonly country: string;

  @IsEmail({}, { message: 'Not an email 1' })
  @IsOptional({ message: 'Not an email 2' })
  public readonly email?: string;

}
