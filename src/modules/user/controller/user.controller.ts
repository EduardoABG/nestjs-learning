import { Controller, Inject, Post, Get, Body, Req, Res } from '@nestjs/common';
import { UserUseCase } from '../useCase/user.useCase';
import { UserModule } from '../module/user.module';
import { UseCaseProxy } from '../../../modules/useCaseProxy/proxy.useCase';
import { CreateUserDto } from '../useCase/dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserModule.USER_USECASE_MODULE)
    private useCase: UseCaseProxy<UserUseCase>,
  ) {}

  @Post('users')
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Req() req,
    @Res() res,
  ) {
    const newUser = await this.useCase.getInstance().create(createUserDto);
    return res.status(201).json(newUser);
  }
  @Get('users')
  async listUsers(@Res() res) {
    const listAllUsers = await this.useCase.getInstance().findAll();
    return res.json(listAllUsers);
  }
}
