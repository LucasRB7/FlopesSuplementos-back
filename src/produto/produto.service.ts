import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoDto } from './dto/produto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository:Repository<ProdutoEntity>
    ){}

    async save(body: ProdutoDto){
        return await this.produtoRepository.save(body)
    }

    async find(){
        return await this.produtoRepository.find();
    }

    async update(id:number,body: ProdutoDto){
        return await this.produtoRepository.update(id, body)
    }

    async remove(id:number){
        return await this.produtoRepository.delete(id)
    }
}
