import { Module } from '@nestjs/common';
import { VendaFinalService } from './venda-final.service';
import { VendaFinalController } from './venda-final.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendaFinalEntity } from './entities/venda-final.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VendaFinalEntity])],
  controllers: [VendaFinalController],
  providers: [VendaFinalService],
  exports: [VendaFinalService]
})
export class VendaFinalModule {}
