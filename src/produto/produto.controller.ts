import {  Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ApiTags } from '@nestjs/swagger';
import { ProdutoDto } from './dto/produto.dto';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly produtoService: ProdutoService
    ){}
    
    @Post('/cadastro')
    create(@Body()produtoDto: ProdutoDto){

        return this.produtoService.save(produtoDto)
    }

    @Get()
    findAll(){
        return this.produtoService.find();
    }

    @Patch('/update/:id')
    update(@Param('id')id:string ,@Body()produtoDto: ProdutoDto){
        return this.produtoService.update( parseInt(id), produtoDto)
    }

    @Delete('/delete/:id')
    remove(@Param('id') id:string){
        console.log(id)
        return this.produtoService.remove(parseInt(id))
    }

}
