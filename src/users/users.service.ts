import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

export interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly users: Model<User>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findOneById(userId: number): Promise<User | undefined> {
    return this.users.find(user => user.userId === userId);
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.users.find().exec();
  }

  async createUser(user: User): Promise<User | undefined> {
    user.password = bcrypt.hashSync(user.password, 10);
    const createdUser = new this.users(user);
    return await createdUser.save();
  }
}
