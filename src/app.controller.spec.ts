import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('comms/', () => {
    describe('your-next-delivery/', () => {
      describe('when the user is found', () => {
        const id = '618f4ed6-1c5b-4993-a149-f64700bf31dd';

        it('should return the correct response', () => {
          expect(appController.getComms({ id })).toEqual({
            title: 'Your next delivery for Betsy',
            message: `Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.`,
            totalPrice: 69,
            freeGift: false,
          });
        });
      });

      describe('when the user is not found', () => {
        const id = 'non-existent-id';

        it('should throw an error', () => {
          expect(() => appController.getComms({ id })).toThrow(
            'User not found',
          );
        });
      });
    });
  });
});
