import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

describe('AppController', () => {
  let appController: AppController;

  const validUser = {
    user: {
      username: 'john',
      password: 'changeme',
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('user', () => {
    it('can log in', () => {
      expect(appController.login(
        validUser,
      ))
      .resolves.toBeDefined();
    });

    it('can get their profile', async () => {
      const jwtToken = await appController.login(
        validUser,
      );

      expect(appController.getProfile(
        validUser,
      )).toBeDefined();
    });
  });
});
