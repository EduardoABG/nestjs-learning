import { Module } from '@nestjs/common';
import { AppController } from './modules/app/controller/app.controller';
import { AppService } from './modules/app/useCase/app.service';
import { UserController } from './modules/user/controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/module/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
    UserModule.register(),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
