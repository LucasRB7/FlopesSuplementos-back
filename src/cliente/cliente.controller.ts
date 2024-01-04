import { Controller, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';


@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @Get()
    findall(){
            return this.clienteService.infor()
    }
}
