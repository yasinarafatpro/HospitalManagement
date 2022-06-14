import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserType } from "./enum/userRoll";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'enum',
        enum:UserType,
        default:UserType.BASIC
    })
    userRoll:UserType;

    @Column()
    Name: string;

    @Column()
    Email: string;

    @Column()
    password:string

}