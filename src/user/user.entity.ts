import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' }) // table name
export class User {
  @PrimaryGeneratedColumn() // auto increment
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
