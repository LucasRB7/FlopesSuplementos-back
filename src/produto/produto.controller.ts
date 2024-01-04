import { Controller, Get } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly produtoService: ProdutoService
    ){}

    @Get()
    findAll(){
        return this.produtoService.find();
    }
}
