import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospitals {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    HospitalName: string;

    @Column()
    password: string;

    @Column()
    HospitalCode:number

    @Column()
    Helper_text:string

}