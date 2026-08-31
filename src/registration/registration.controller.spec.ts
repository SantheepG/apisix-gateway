import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationController } from './registration.controller.js';
import { RegistrationService } from './registration.service.js';

describe('RegistrationController', () => {
  let controller: RegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationController],
      providers: [RegistrationService],
    }).compile();

    controller = module.get<RegistrationController>(RegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
