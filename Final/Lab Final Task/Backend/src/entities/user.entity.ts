import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Subscription } from "./subscription.entity";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: false, nullable: false})
    name: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: true})
    role: string;

    @Column({nullable: true})
    type: string;

    @ManyToOne(()=> Subscription, {onDelete: 'SET NULL'})
    subscription: Subscription;

    @BeforeInsert()
    async hashPasswod(){
        this.password = await bcrypt.hash(this.password,10);
    }
}