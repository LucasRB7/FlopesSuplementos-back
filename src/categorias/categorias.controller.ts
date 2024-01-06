import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post('/cadastrar')
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.save(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get('/:table')
  findOne(@Param('table') table: string) {
    return this.categoriasService.findOne(table);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete('/remove/:id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
