import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospitals {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

}