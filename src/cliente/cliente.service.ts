import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';


@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>
    ){}

    async save(createClienteDto: CreateClienteDto){
        return await this.clienteRepository.save(this.clienteRepository.create(createClienteDto))
    }

    async find(){
        return await this.clienteRepository.find();
    }

    async update(id:number, data: UpdateClienteDto){
        return await this.clienteRepository.update(id,data);
    }

    async remove(id:number){
        return await this.clienteRepository.delete(id)
    }

}
