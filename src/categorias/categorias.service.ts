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

  async findOne(table: string) {
    return await this.categoriaRepo.createQueryBuilder('cat')
    .select(
      'cat.categoria_nome'
      )
    .where('cat.categoria_nome = :table',{table})
    .getRawMany();
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.categoriaRepo.update(id,updateCategoriaDto)
  }

  async remove(id: number) {
    return this.categoriaRepo.delete(id);
  }
}
