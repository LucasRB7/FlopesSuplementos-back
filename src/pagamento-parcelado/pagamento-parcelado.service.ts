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

  create(pagamentoParceladoDto: any) {
    return this.pagamentoParceladoRepo.save(pagamentoParceladoDto)
  }
  async gerarParcelas(id_venda_ref:number, valor:number, parcela:number, vencimento: string){
    const valorParcela = valor / parcela;
   
    function incrementarMes(dataString: string, numeroMeses:number) {
      const partes = dataString.split('/');
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1; // -1 porque os meses em JavaScript começam do 0
      const ano = parseInt(partes[2], 10);
    
      const data = new Date(ano, mes, dia);
      data.setMonth(data.getMonth() + numeroMeses);
    
      const diaFinal = ('0' + data.getDate()).slice(-2);
      const mesFinal = ('0' + (data.getMonth() + 1)).slice(-2); // +1 porque queremos o mês no formato humano (1-12)
      const anoFinal = data.getFullYear();
    
      return `${diaFinal}/${mesFinal}/${anoFinal}`;
    }

    for (let i = 0; i < parcela ; i++){
      const parcela = new PagamentoParceladoDto();

      parcela.id_venda_ref = id_venda_ref;
      parcela.parcela = i + 1
      parcela.valor = valorParcela;
      parcela.status = 'Pendente';
      parcela.vencimento = incrementarMes(vencimento, i)

      await this.create(parcela)
    }

  }


  findAll() {
    return this.pagamentoParceladoRepo.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} pagamentoParcelado`;
  // }

  update(id: number, pagamentoParceladoDto: PagamentoParceladoDto) {
    return `This action updates a #${id} pagamentoParcelado`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagamentoParcelado`;
  }
}
