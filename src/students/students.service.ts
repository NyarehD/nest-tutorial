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

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return this.studentRepository.find({ relations: ['country'] });
  }

  countryWithStudents() {
    return this.countryRepository.find({ relations: ['students'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} student findOne`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student update`;
  }

  remove(id: number) {
    return `This action removes a #${id} student remove `;
  }
}
