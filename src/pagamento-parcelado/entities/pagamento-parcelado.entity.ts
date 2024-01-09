import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagamentos')
export class PagamentoParceladoEntity {

    @PrimaryGeneratedColumn()
    pagamentos_id:number

    @Column()
    id_venda_ref:number

    @Column()
    parcela:number

    @Column()
    vencimento:string

    @Column()
    status:string

    @Column({type:'float'})
    valor:number
}