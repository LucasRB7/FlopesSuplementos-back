import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendaFinalService } from './venda-final.service';
import { VendaFinalDto } from './dto/venda-final.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Venda-Final')
@Controller('venda-final')
export class VendaFinalController {
  constructor(private readonly vendaFinalService: VendaFinalService) {}

  @Post("/cadastrar")
  create(@Body() vendaFinalDto: VendaFinalDto) {
    return this.vendaFinalService.create(vendaFinalDto);
  }

  @Get()
  findAll() {
    return this.vendaFinalService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vendaFinalService.findOne(+id);
  // }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() vendaFinalDto: VendaFinalDto) {
    return this.vendaFinalService.update(+id, vendaFinalDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.vendaFinalService.remove(+id);
  }
}
