import Recipe from '@modules/recipes/typeorm/entities/Recipe';
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('drug')
export default class Drug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 150 })
  name: string;

  @Column()
  shortDescription: string;

  @OneToMany(type => Recipe, relatedDrugs => Drug)
  recipes: Recipe[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
