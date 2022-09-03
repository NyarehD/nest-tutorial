import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()// sql table === "coffee" this will create sql table with the name "coffee
export class Coffee {
@PrimaryGeneratedColumn()
  id: number;
@Column()
  name: string;
@Column()
  brand: string;
  @Column("json",{nullable:true})
  flavors: string[];
}
