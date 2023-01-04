import { IsEmail, IsString } from 'class-validator';

export class ChatDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  text: string;
}
