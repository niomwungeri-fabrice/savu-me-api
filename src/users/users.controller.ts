import { Controller, Get, Query } from '@nestjs/common';
import { PaginatedResponse } from 'src/common/responses/response.options';
import { User } from 'src/common/types/user.type';
import { FetchUsersRequestDto } from './dto/fetch-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    fetch(@Query() options: FetchUsersRequestDto): Promise<PaginatedResponse<User>> {
        return this.usersService.fetch(options);
    }
}
