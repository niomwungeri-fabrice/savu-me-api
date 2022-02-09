import { PaginatedResponse } from '../common/responses/response.options';
import { UsersRepository } from './users.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { User } from '../common/types/user.type';

describe('UsersController', () => {
  let prisma: PrismaService;
  let controller: UsersController;
  let usersService: UsersService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    usersRepository = new UsersRepository(prisma);
    usersService = new UsersService(usersRepository);
    controller = new UsersController(usersService);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [PrismaService, UsersService, UsersRepository],
    }).compile();
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // const result: Promise<PaginatedResponse<User>> = null;
  const result: any = { take: 0, skip: 0, total: 0, items: [] };
  describe('findAll', () => {
    it('should return an array of users', async () => {
      jest.spyOn(usersService, 'fetch').mockImplementation(() => result);
      expect(await controller.fetch({ take: 0, skip: 0 })).toStrictEqual(result)
    });
  });

});
