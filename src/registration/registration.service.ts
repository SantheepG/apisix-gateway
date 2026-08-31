import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Registration } from './entities/registration.entity.js';
import { CreateRegistrationDto } from './dto/create-registration.dto.js';
import { ApproveRegistrationDto } from './dto/approve-registration.dto.js';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const registration = this.registrationRepository.create(
      createRegistrationDto,
    );

    return this.registrationRepository.save(registration);
  }

  async approve(
    approveRegistrationDto: ApproveRegistrationDto,
  ): Promise<Registration> {
    const { email, phone } = approveRegistrationDto;

    const registration = await this.registrationRepository.findOne({
      where: {
        email,
        phone,
      },
    });

    if (!registration) {
      throw new NotFoundException(
        'Registration with the given email and phone was not found',
      );
    }

    registration.approved = true;

    return this.registrationRepository.save(registration);
  }
}