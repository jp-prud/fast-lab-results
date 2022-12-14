import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Drug from '@modules/drugs/typeorm/entities/Drug';
import Consumer from '@modules/consumers/typeorm/entities/Consumer';

@Entity('recipe')
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

  @ManyToMany(type => Drug, {
    eager: true,
    onUpdate: 'NO ACTION',
    onDelete: 'DEFAULT',
  })
  @JoinTable()
  relatedDrugs: Drug;

  @ManyToOne(type => Consumer, recipes => Recipe)
  consumer: Consumer;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
