import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('registrations')
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  payment: string;

  @Column()
  approved: boolean;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;
}