import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export default class Usuario {
  @PrimaryGeneratedColumn("increment")
  _id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
