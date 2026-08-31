import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Registration } from './entities/registration.entity.js';
import { RegistrationController } from './registration.controller.js';
import { RegistrationService } from './registration.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}