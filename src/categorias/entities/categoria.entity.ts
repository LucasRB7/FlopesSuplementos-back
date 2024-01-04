import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'categoria'})
export class CategoriaEntity {
    @PrimaryGeneratedColumn()
    categoria_id:number

    @Column()
    categoria_nome:string
}
