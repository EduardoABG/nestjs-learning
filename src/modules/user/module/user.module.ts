import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from '../controller/user.controller';
import { UserUseCase } from '../useCase/user.useCase';
import { User, UserSchema } from '../../../schemas';
import { RepositoriesModule } from '../../../infra/repositories/repositories.module';
import UserRepository from '../../../infra/repositories/user/user.repository';
import { UseCaseProxy } from '../../../modules/useCaseProxy/proxy.useCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RepositoriesModule,
    UserModule.register(),
  ],
  controllers: [UserController],
  providers: [UserUseCase],
})
export class UserModule {
  static USER_USECASE_MODULE = 'userUsecaseModule';

  static register(): DynamicModule {
    return {
      module: UserModule,
      providers: [
        {
          inject: [UserRepository],
          provide: UserModule.USER_USECASE_MODULE,
          useFactory: (repository: UserRepository) =>
            new UseCaseProxy(new UserUseCase(repository)),
        },
      ],
      exports: [UserModule.USER_USECASE_MODULE],
    };
  }
}
