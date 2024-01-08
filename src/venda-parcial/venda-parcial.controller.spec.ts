import { Test, TestingModule } from '@nestjs/testing';
import { VendaParcialController } from './venda-parcial.controller';
import { VendaParcialService } from './venda-parcial.service';

describe('VendaParcialController', () => {
  let controller: VendaParcialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendaParcialController],
      providers: [VendaParcialService],
    }).compile();

    controller = module.get<VendaParcialController>(VendaParcialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
