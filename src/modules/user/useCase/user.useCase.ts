import GenericRepository from '../../../infra/repositories/generic.repository';
import { CreateUserDto } from './dto/createUser.dto';

export class UserUseCase {
  constructor(private repository: GenericRepository) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.repository.create(createUserDto);
    return createUser.save();
  }
  async findAll() {
    return await this.repository.find({});
  }
}
