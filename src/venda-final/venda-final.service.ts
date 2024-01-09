import { Injectable } from '@nestjs/common';
import { VendaFinalDto } from './dto/venda-final.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VendaFinalEntity } from './entities/venda-final.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendaFinalService {
  constructor(
    @InjectRepository(VendaFinalEntity)
    private readonly vendaFinalRepo: Repository<VendaFinalEntity>
  ){}
  create(vendaFinalDto: VendaFinalDto) {
    return this.vendaFinalRepo.save(vendaFinalDto)
  }

  findAll() {
    return this.vendaFinalRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} vendaFinal`;
  }

  update(id: number, vendaFinalDto: VendaFinalDto) {
    return `This action updates a #${id} vendaFinal`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendaFinal`;
  }
}
