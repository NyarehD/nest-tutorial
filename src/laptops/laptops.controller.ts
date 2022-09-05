import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import LaptopsService from './laptops.service';
import { CreateLaptopsDto } from './dto/create-laptops.dto';

@Controller('laptops')
export default class LaptopsController {
  constructor(private readonly laptopService: LaptopsService) {
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.laptopService.find(id);
  }

  @Post()
  create(@Body() createLaptopsDto: CreateLaptopsDto) {
    return this.laptopService.create(createLaptopsDto);
  }
}