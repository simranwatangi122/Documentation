import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ContactMessageDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'A valid email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Subject is required' })
  subject: string;

  @IsString()
  @MinLength(10, { message: 'Message must be at least 10 characters long' })
  message: string;
}
