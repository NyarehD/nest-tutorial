import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Laptops {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column('json', { nullable: true })
  specs: string[];
}