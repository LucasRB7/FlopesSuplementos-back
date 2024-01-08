import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('venda_parcial')
export class VendaParcialEntity {
    @PrimaryGeneratedColumn()
    venda_id:number;

    @Column()
    quantidade:number;

    @Column()
    venda_id_referencia:number;

    @Column()
    produto_id:number;
}
