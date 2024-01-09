import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagamentoParceladoService } from './pagamento-parcelado.service';
import { PagamentoParceladoDto } from './dto/pagamento-parcelado.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pagamento-Parcelado')
@Controller('pagamento-parcelado')
export class PagamentoParceladoController {
  constructor(private readonly pagamentoParceladoService: PagamentoParceladoService) {}

  @Post('/cadastrar')
  createPagamentos(@Body() pagamentoParceladoDto: PagamentoParceladoDto) {
    return this.pagamentoParceladoService.gerarParcelas(
      pagamentoParceladoDto.id_venda_ref,
      pagamentoParceladoDto.valor,
      pagamentoParceladoDto.parcela,
      pagamentoParceladoDto.vencimento
    )
  }

  @Get()
  findAll() {
    return this.pagamentoParceladoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pagamentoParceladoService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() pagamentoParceladoDto: PagamentoParceladoDto) {
    return this.pagamentoParceladoService.update(+id, pagamentoParceladoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagamentoParceladoService.remove(+id);
  }
}
