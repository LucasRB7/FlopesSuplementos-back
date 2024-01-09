import { Test, TestingModule } from '@nestjs/testing';
import { PagamentoParceladoController } from './pagamento-parcelado.controller';
import { PagamentoParceladoService } from './pagamento-parcelado.service';

describe('PagamentoParceladoController', () => {
  let controller: PagamentoParceladoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagamentoParceladoController],
      providers: [PagamentoParceladoService],
    }).compile();

    controller = module.get<PagamentoParceladoController>(PagamentoParceladoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
