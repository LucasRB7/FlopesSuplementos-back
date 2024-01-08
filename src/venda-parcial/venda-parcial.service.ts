import { Injectable } from '@nestjs/common';
import { VendaParcialDto } from './dto/venda-parcial.dto';
import { Repository } from 'typeorm';
import { VendaParcialEntity } from './entities/venda-parcial.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VendaParcialService {
  constructor(
    @InjectRepository(VendaParcialEntity)
    private readonly vendaParcialRepo:Repository<VendaParcialEntity>
  ){}

  create(vendaParcialDto: VendaParcialDto) {
    return this.vendaParcialRepo.save(vendaParcialDto);
  }

  findAll() {
    return this.vendaParcialRepo.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vendaParcial`;
  // }

  update(id: number, vendaParcialDto: VendaParcialDto) {
    return this.vendaParcialRepo.update(id,vendaParcialDto)
  }

  remove(id: number) {
    return this.vendaParcialRepo.delete(id)
  }
}
