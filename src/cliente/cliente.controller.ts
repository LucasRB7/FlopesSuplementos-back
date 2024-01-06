import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto'

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @Post('/cadastrar')
    create(@Body() createClienteDto: CreateClienteDto) {
        return this.clienteService.save(createClienteDto);
    }

    @Get()
    findall(){
        return this.clienteService.find()
    }

    @Patch('/update/:id')
    update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
        return this.clienteService.update(+id, updateClienteDto);
    }
  
    @Delete('/delete/:id')
    remove(@Param('id') id: string) {
        return this.clienteService.remove(+id);
    }
}
