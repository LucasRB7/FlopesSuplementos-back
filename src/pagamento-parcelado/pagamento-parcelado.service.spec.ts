import { Test, TestingModule } from '@nestjs/testing';
import { PagamentoParceladoService } from './pagamento-parcelado.service';

describe('PagamentoParceladoService', () => {
  let service: PagamentoParceladoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagamentoParceladoService],
    }).compile();

    service = module.get<PagamentoParceladoService>(PagamentoParceladoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
