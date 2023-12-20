import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("comments")
export class Comment{

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable:false})
    comment: string;


    @ManyToOne(type=>User, user=>user.comment)
    @JoinColumn()
    user: User;
}
