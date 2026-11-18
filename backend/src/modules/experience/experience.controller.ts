import { Controller, Get, Query } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  findAll(@Query('type') type?: string): Experience[] {
    return this.experienceService.findAll(type);
  }
}
