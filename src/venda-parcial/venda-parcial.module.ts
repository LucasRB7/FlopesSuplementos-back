import { Module } from '@nestjs/common';
import { VendaParcialService } from './venda-parcial.service';
import { VendaParcialController } from './venda-parcial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendaParcialEntity } from './entities/venda-parcial.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VendaParcialEntity])],
  controllers: [VendaParcialController],
  providers: [VendaParcialService],
  exports: [VendaParcialService]
})
export class VendaParcialModule {}
