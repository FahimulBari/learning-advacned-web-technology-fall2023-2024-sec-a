import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('templates')
export class Template{

    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: false, nullable: false})
    name: string;

    @Column({nullable: false})
    features: string;

    @Column({nullable: false})
    type: string;

    @Column({unique: true, nullable: false})
    url: string;
}