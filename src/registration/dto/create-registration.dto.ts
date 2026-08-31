import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  payment: string;

  @IsBoolean()
  approved: boolean;

  @IsNumber()
  amount: number;
}