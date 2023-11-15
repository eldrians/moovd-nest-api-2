import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gps' }) // table name
export class Gps {
  @PrimaryGeneratedColumn() // auto increment
  id: number;

  @Column()
  device_id: string;

  @Column()
  device_type: string;

  @Column()
  timestamp: string;

  @Column()
  location: string;
}
