import { Test, TestingModule } from '@nestjs/testing';
import { VendaParcialService } from './venda-parcial.service';

describe('VendaParcialService', () => {
  let service: VendaParcialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendaParcialService],
    }).compile();

    service = module.get<VendaParcialService>(VendaParcialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
