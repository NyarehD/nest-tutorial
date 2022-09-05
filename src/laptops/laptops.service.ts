import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLaptopsDto } from './dto/create-laptops.dto';
import { UpdateLaptopsDto } from './dto/update-laptops.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Laptops } from './entities/laptops.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class LaptopsService {
  constructor(@InjectRepository(Laptops) private laptopsRepository: Repository<Laptops>) {
  }

  async find(id: number) {
    const laptop = await this.laptopsRepository.findOne({ where: { id } });
    if (!laptop) throw new NotFoundException(`Laptop id ${id} cannot be found`);
    return laptop;
  }

  create(createLaptopDto: CreateLaptopsDto) {
    const laptop = this.laptopsRepository.create(createLaptopDto);
    return this.laptopsRepository.save(laptop );
  }

  update(updateLaptopDto: UpdateLaptopsDto) {
    return `Updated ${updateLaptopDto}`;
  }
}