import { Controller, Get } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillCategory } from './entities/skill.entity';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  findAll(): SkillCategory[] {
    return this.skillsService.findAll();
  }
}
