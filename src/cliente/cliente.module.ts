import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports:[ClienteService]
})
export class ClienteModule {}
