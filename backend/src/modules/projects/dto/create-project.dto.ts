import { IsString, IsNotEmpty, IsArray, IsBoolean, IsOptional, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  longDescription?: string;

  @IsString()
  @IsNotEmpty()
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';

  @IsArray()
  tags: string[];

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsUrl()
  githubUrl: string;

  @IsUrl()
  @IsOptional()
  liveUrl?: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @IsString()
  @IsOptional()
  completionDate?: string;
}
