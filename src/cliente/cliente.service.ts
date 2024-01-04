import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>
    ){}

    async find(){
        return this.clienteRepository.find();
    }
}
