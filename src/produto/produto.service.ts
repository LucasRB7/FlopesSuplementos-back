import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository:Repository<ProdutoEntity>
    ){}

    async find(){
        return await this.produtoRepository.find();
    }
}
