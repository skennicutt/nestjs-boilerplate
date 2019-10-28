import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService, User } from './users.service';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Query()
  async getUserById(@Args('id') id: number) {
    return await this.usersService.findOneById(id);
  }

  @Query()
  async getAllUsers() {
    return await this.usersService.findAll();
  }

  @Mutation()
  async createUser(@Args('user') user: User) {
    return await this.usersService.createUser(user);
  }
}
