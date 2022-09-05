import { PartialType } from '@nestjs/mapped-types';
import { CreateLaptopsDto } from './create-laptops.dto';

export class UpdateLaptopsDto extends PartialType(CreateLaptopsDto){}