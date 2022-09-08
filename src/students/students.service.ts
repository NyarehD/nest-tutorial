import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Country } from './entities/country.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {
  }

  async create(createStudentDto: CreateStudentDto) {
    const country = await this.preloadCountryByName(createStudentDto.country);
    const student = this.studentRepository.create({
      ...createStudentDto,
      country,
    });
    return this.studentRepository.save(student);
  }

  async preloadCountryByName(name: string): Promise<Country> {
    const existingCountry = await this.countryRepository.findOneOrFail({ where: { name } });
    // Beware of the entry to create method
    if (!existingCountry) return this.countryRepository.create({ name });
    return existingCountry;
  };

  findAll() {
    return this.studentRepository.find({ relations: ['country'], order: { id: 'asc' } });
  }

  countryWithStudents() {
    return this.countryRepository.find({ relations: ['students'], order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} student findOne`;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const country = await this.preloadCountryByName(updateStudentDto.country);
    return await this.studentRepository.update({ id }, {
      name: updateStudentDto.name,
      email: updateStudentDto.email,
      age: updateStudentDto.age,
      country,
    });
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
