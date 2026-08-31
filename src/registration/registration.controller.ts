import { Body, Controller, Post, Patch } from '@nestjs/common';
import { ApproveRegistrationDto } from './dto/approve-registration.dto.js';
import { RegistrationService } from './registration.service.js';
import { CreateRegistrationDto } from './dto/create-registration.dto.js';

@Controller('registrations')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
  ) {}

  @Post()
  async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Patch('approve')
  async approve(
    @Body() approveRegistrationDto: ApproveRegistrationDto,
  ) {
    return this.registrationService.approve(approveRegistrationDto);
  }
}