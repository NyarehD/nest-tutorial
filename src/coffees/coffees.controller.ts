import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action is get';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This returns ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'This deletes ${id}';
  }
}
