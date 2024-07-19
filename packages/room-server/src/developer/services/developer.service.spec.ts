

import { UserEntity } from 'user/entities/user.entity';
import { DeveloperRepository } from '../repositories/developer.repository';
import { DeveloperService } from './developer.service';
import { Test } from '@nestjs/testing';
import { UserService } from '../../user/services/user.service';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from 'app.module';

describe('DeveloperService', () => {
  let app: NestFastifyApplication;
  let developerService: DeveloperService;
  let developerRepo: DeveloperRepository;
  let userService: UserService;
  const knownAPIKey = 'key1';
  const knownExpiredAPIKey = 'key2';
  const knownUserId = 12345;

  beforeAll(async() => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    developerRepo = app.get<DeveloperRepository>(DeveloperRepository);
    userService = app.get<UserService>(UserService);
    developerService = app.get<DeveloperService>(DeveloperService);
  });

  afterAll(async() => {
    await app.close();
  });

  beforeEach(() => {
    jest.spyOn(developerRepo, 'selectUserIdByApiKey').mockImplementation((apiKey) => {
      if (apiKey === knownAPIKey) {
        return Promise.resolve({ userId: BigInt(knownUserId) });
      } else if (apiKey === knownExpiredAPIKey) {
        return Promise.resolve({ userId: BigInt(Math.floor(Math.random() * 10000)) });
      }
      return Promise.resolve(undefined);
    });
    jest.spyOn(userService, 'selectUserBaseInfoById').mockImplementation((userId) => {
      if (userId === knownUserId.toString()) {
        const nikeName = 'xiaoming';
        const userEntity = new UserEntity();
        userEntity.nikeName = nikeName;
        return Promise.resolve(userEntity);
      }
      return Promise.resolve(undefined);
    });
  });

  describe('test getUserInfoByApiKey', () => {

    it('should return null with an unknown API key', async() => {
      const result = await developerService.getUserInfoByApiKey(Math.floor(Math.random() * 10000).toString());
      expect(result).toBeNull();
    });

    it('should return user entity with a known API key', async() => {
      const nikeName = 'xiaoming';
      const result = (await developerService.getUserInfoByApiKey(knownAPIKey))!;
      expect(result.nikeName).toEqual(nikeName);
    });

    it('should return undefined with an expired API key', async() => {
      const result = (await developerService.getUserInfoByApiKey(knownExpiredAPIKey))!;
      expect(result).toBeUndefined();
    });
  });
});
