import { IsEmail, IsString } from 'class-validator';

export class ApproveRegistrationDto {
  @IsEmail()
  email: string;

  @IsString()
  phone: string;
}