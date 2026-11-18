import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactMessageDto } from './dto/contact-message.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  sendMessage(@Body() dto: ContactMessageDto) {
    return this.contactService.sendMessage(dto);
  }

  @Get()
  getMessages() {
    return this.contactService.getMessages();
  }
}
