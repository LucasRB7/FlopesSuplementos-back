import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port:number = 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Flopes Suplementos")
    .setDescription("Api do sistema de vendas e controle de estoque")
    .setVersion("1.0")
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger',app, document);

  await app.listen(port);
  console.log(`server ON - Port ${port}`)
}
bootstrap();