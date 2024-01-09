import { INestApplication, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UsersModule } from './users/users.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VendaParcialModule } from './venda-parcial/venda-parcial.module';
import { VendaFinalModule } from './venda-final/venda-final.module';
import { PagamentoParceladoModule } from './pagamento-parcelado/pagamento-parcelado.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [__dirname + '/**/*.entity{.js,.ts  }']
    })
    ,ClienteModule, ProdutoModule, CategoriasModule, UsersModule, VendaParcialModule, VendaFinalModule, PagamentoParceladoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
