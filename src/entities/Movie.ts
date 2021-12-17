import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from 'class-transformer';
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("movies")
export class Movie {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Exclude()
  @Column()
  category_id : string;
  
  @ManyToOne(() => Category)
  @JoinColumn({name  : "category_id"})
  category: Category;

  @Column()
  duration: number;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
