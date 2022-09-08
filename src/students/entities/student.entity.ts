import { Column, Entity, ManyToOne } from 'typeorm';
import { Country } from './country.entity';
import { Content } from './content.entity';

@Entity()
export class Student extends Content {
  @Column()
  name: string;

  @Column({ nullable: true })
  age: number;

  @Column('varchar', { unique: true, nullable: true })
  email: string;

  @ManyToOne(() => Country, country => country.students, {
    cascade: true,
  })
  country: Country;
}


