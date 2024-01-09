import { Injectable } from '@nestjs/common';
import { PagamentoParceladoDto } from './dto/pagamento-parcelado.dto';
import { Repository } from 'typeorm';
import { PagamentoParceladoEntity } from './entities/pagamento-parcelado.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagamentoParceladoService {  
  constructor(
    @InjectRepository(PagamentoParceladoEntity)
    private readonly pagamentoParceladoRepo: Repository<PagamentoParceladoEntity>
  ){}

  create(pagamentoParceladoDtoAny: any) {
    return this.pagamentoParceladoRepo.save(pagamentoParceladoDtoAny)
  }
  async gerarParcelas(id_venda_ref:number, valor:number, parcela:number, vencimento: Date){
    const valorParcela = valor / parcela;

    for (let i = 0; i < parcela ; i++){
      const parcela = new PagamentoParceladoDto();
      parcela.id_venda_ref = id_venda_ref;
      parcela.parcela = i + 1
      parcela.valor = valorParcela;
      parcela.status = 'Pendente';
      parcela.vencimento = new Date(vencimento)
      parcela.vencimento.setMonth(parcela.vencimento.getMonth() + 1);

      await this.create(parcela)
    }

  }


  findAll() {
    return this.pagamentoParceladoRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} pagamentoParcelado`;
  }

  update(id: number, pagamentoParceladoDto: PagamentoParceladoDto) {
    return `This action updates a #${id} pagamentoParcelado`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagamentoParcelado`;
  }
}
