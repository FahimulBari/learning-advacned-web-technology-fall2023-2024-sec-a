import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Subscription } from "./subscription.entity";
import { PaymentMethod } from "./payment.method.entity";
import { Download } from "./download.entity";
import { UserQuestion } from "./userquestion.entity";

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

    @Column({ default: 'active' })
    status: string;

    @ManyToOne(()=> Subscription)
    subscription: Subscription;

    @OneToOne(()=> PaymentMethod)
    @JoinColumn()
    payment_method: PaymentMethod;

    @OneToMany(() => Download, download => download.user)
    downloads: Download[];

    @OneToMany(() => UserQuestion, userQuestion => userQuestion.user)
    questions: UserQuestion[];

    @BeforeInsert()
    async hashPasswod(){
        this.password = await bcrypt.hash(this.password,10);
    }
}