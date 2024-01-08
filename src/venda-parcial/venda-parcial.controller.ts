import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendaParcialService } from './venda-parcial.service';
import { VendaParcialDto } from './dto/venda-parcial.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('venda-parcial')
@Controller('venda-parcial')
export class VendaParcialController {
  constructor(private readonly vendaParcialService: VendaParcialService) {}

  @Post()
  create(@Body() vendaParcialDto: VendaParcialDto) {
    return this.vendaParcialService.create(vendaParcialDto);
  }

  @Get()
  findAll() {
    return this.vendaParcialService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vendaParcialService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() vendaParcialDto: VendaParcialDto) {
    return this.vendaParcialService.update(+id, vendaParcialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaParcialService.remove(+id);
  }
}
