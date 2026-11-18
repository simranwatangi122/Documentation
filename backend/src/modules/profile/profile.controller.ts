import { Controller, Get } from '@nestjs/common';
import { ProfileService, ProfileData } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile(): ProfileData {
    return this.profileService.getProfile();
  }
}
