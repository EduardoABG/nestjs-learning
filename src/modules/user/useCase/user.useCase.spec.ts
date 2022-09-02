import { Test, TestingModule } from '@nestjs/testing';
import { UserUseCase } from './user.useCase';

describe('UserUseCase', () => {
  let useCase: UserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserUseCase],
    }).compile();

    useCase = module.get<UserUseCase>(UserUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});
