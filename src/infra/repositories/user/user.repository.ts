import GenericRepository from '../generic.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../../schemas';
import { Injectable } from '@nestjs/common';
@Injectable()
export default class UserRepository implements GenericRepository {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(payload: any) {
    return await this.UserModel.create(payload);
  }
  async update(id: any, payload: any) {
    return await this.UserModel.findOneAndUpdate(id, payload);
  }
  async find(payload?: any) {
    return await this.UserModel.find(payload);
  }
  async findById(id: any) {
    return await this.UserModel.findById(id);
  }
  async delete(id: any) {
    return await this.UserModel.deleteOne({ _id: id });
  }
  async count(payload: any) {
    return await this.UserModel.count(payload);
  }
}
