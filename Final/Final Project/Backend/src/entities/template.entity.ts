import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Download } from "./download.entity";

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

    @OneToMany(() => Download, download => download.template)
    downloads: Download[];
}