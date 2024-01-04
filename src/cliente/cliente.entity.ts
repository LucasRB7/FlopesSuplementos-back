import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cliente'})
export class ClienteEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome_pessoa:string

    @Column()
    apelido:string

    @Column()
    endereco:string

    @Column()
    telefone:string

    @Column()
    email:string

    @Column()
    rg_cpf:string

    @Column()
    data_nasc:string
}