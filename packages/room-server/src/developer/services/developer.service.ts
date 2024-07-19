import { Injectable } from '@nestjs/common';
import { UserEntity } from 'user/entities/user.entity';
import { DeveloperRepository } from '../repositories/developer.repository';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class DeveloperService {
  constructor(
    private readonly developerRepo: DeveloperRepository,
    private readonly userService: UserService,
  ) {}

  /**
   * Get User base info by api key
   *
   * @param apiKey unique token on developer platform
   * @return user_id
   * @author Zoe Zheng
   * @date 2020/7/24 3:18 PM
   */
  public async getUserInfoByApiKey(apiKey: string): Promise<UserEntity | null> {
    const entity = await this.developerRepo.selectUserIdByApiKey(apiKey);
    if (entity && entity.userId) {
      return (await this.userService.selectUserBaseInfoById(entity.userId.toString()))!;
    }
    return null;
  }
}
