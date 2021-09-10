import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('readings')
export class Reading {
  @PrimaryGeneratedColumn()
  Serial_Number: string;

  @Column()
  Device_ID: string;

  @Column()
  Device_Name: string;

  @Column()
  Wattage: number;
}
