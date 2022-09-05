import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()// sql table === "coffee" this will create sql table with the name "coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, flavor => flavor.coffees, {
    cascade: true, // ['insert']
  })
  flavors: Flavor[];
}
