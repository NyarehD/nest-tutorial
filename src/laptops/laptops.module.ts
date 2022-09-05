import { Module } from '@nestjs/common';
import LaptopsController from './laptops.controller';
import LaptopsService from './laptops.service';
import { Laptops } from './entities/laptops.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LaptopsController],
  providers: [LaptopsService],
  imports: [TypeOrmModule.forFeature([Laptops])],
})
export class LaptopsModule {
}