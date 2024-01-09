import { Test, TestingModule } from '@nestjs/testing';
import { VendaFinalController } from './venda-final.controller';
import { VendaFinalService } from './venda-final.service';

describe('VendaFinalController', () => {
  let controller: VendaFinalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendaFinalController],
      providers: [VendaFinalService],
    }).compile();

    controller = module.get<VendaFinalController>(VendaFinalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
