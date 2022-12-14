// import Recipe from '@modules/recipes/typeorm/entities/Recipe';
import Recipe from '@modules/recipes/typeorm/entities/Recipe';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('consumer')
export default class Consumer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 150 })
  name: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @OneToMany(type => Recipe, consumer => Consumer, { eager: true })
  recipes: Recipe[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
