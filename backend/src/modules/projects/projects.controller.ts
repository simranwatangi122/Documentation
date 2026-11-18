import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('featured') featured?: string,
  ): Project[] {
    const isFeatured = featured !== undefined ? featured === 'true' : undefined;
    return this.projectsService.findAll(category, isFeatured);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Project {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Project {
    return this.projectsService.create(createProjectDto);
  }
}
