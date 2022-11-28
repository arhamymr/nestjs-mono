import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsOptional()
  @MinLength(3)
  username: string;

  @IsOptional()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
