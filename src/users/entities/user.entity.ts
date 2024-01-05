import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'usuario'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    usuario_id:number

    @Column()
    usuario_nome:string

    @Column()
    usuario_senha:string
}
