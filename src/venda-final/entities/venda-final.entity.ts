import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('venda_final')
export class VendaFinalEntity {
    @PrimaryGeneratedColumn()
    venda_final_id:number

    @Column()
    vendap_id:number

    @Column()
    cliente_id:number

    @Column()
    usuario_id:number

    @Column()
    status:string

    @Column({type:"float"})
    total:number

    @Column({type:"float"})
    acrescimos:number

    @Column({type:"float"})
    descontos:number

    @Column({type:"float"})
    subtotal:number

    @Column()
    pagamento_id:number

    @Column()
    data_horario_venda:string
}
