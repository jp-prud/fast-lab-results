import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Drug from './Drug';

@Entity('recipes')
export default class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150, unique: true })
  title: string;

  @Column()
  shortDescription: string;

  @Column({ length: 100 })
  medicName: string;

  @Column()
  documentPath: string;

  @OneToMany(type => Drug, recipes => Recipe, { eager: true })
  relatedDrugs: Drug[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
