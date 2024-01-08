import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'produto'})
export class ProdutoEntity{
    @PrimaryGeneratedColumn()
    produto_id:number

    @Column()
    produto_nome:string

    @Column()
    categoria_id:number

    @Column()
    quantidade:number

    @Column({type:"float"})
    preco_compra:number

    @Column({type:"float"})
    preco_venda:number

    @Column()
    data_vencimento:string

    @Column()
    peso:string
}