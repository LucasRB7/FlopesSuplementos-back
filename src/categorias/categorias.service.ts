import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private readonly categoriaRepo:Repository<CategoriaEntity>
  ){}

  async save(createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriaRepo.save(this.categoriaRepo.create(createCategoriaDto));
  }

  async findAll() {
    return await this.categoriaRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  async remove(id: number) {
    return this.categoriaRepo.delete(id);
  }
}
