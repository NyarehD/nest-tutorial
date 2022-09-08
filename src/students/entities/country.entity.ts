import { Column, Entity, OneToMany } from 'typeorm';
import { Student } from './student.entity';
import { Content } from './content.entity';

@Entity()
export class Country extends Content {
  @Column()
  name: string;

  @OneToMany(() => Student, student => student.country)
  students: Student[];
}
