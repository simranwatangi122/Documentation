import { Injectable, Logger } from '@nestjs/common';
import { ContactMessageDto } from './dto/contact-message.dto';

export interface StoredMessage extends ContactMessageDto {
  id: string;
  receivedAt: string;
  status: 'received' | 'replied';
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private messages: StoredMessage[] = [];

  sendMessage(dto: ContactMessageDto): { success: boolean; message: string; id: string } {
    const id = `msg_${Date.now()}`;
    const newMsg: StoredMessage = {
      ...dto,
      id,
      receivedAt: new Date().toISOString(),
      status: 'received',
    };
    this.messages.push(newMsg);

    this.logger.log(`New contact submission from ${dto.name} <${dto.email}>: "${dto.subject}"`);

    return {
      success: true,
      message: 'Thank you for reaching out! Your message has been received, and I will get back to you shortly.',
      id,
    };
  }

  getMessages(): StoredMessage[] {
    return this.messages;
  }
}
