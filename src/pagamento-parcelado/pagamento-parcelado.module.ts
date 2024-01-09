import { Module } from '@nestjs/common';
import { PagamentoParceladoService } from './pagamento-parcelado.service';
import { PagamentoParceladoController } from './pagamento-parcelado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentoParceladoEntity } from './entities/pagamento-parcelado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PagamentoParceladoEntity])],
  controllers: [PagamentoParceladoController],
  providers: [PagamentoParceladoService],
  exports: [PagamentoParceladoService]
})
export class PagamentoParceladoModule {}
