import { Test, TestingModule } from '@nestjs/testing';
import { VendaFinalService } from './venda-final.service';

describe('VendaFinalService', () => {
  let service: VendaFinalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendaFinalService],
    }).compile();

    service = module.get<VendaFinalService>(VendaFinalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
