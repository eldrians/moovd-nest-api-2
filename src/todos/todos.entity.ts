import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todos' }) // table name
export class Todo {
  @PrimaryGeneratedColumn() // auto increment
  id: number;

  @Column()
  title: string;
}
