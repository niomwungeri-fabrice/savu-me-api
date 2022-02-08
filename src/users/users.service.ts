import { Injectable } from '@nestjs/common';
import { PaginatedResponse } from 'src/common/responses/response.options';
import { User } from "src/common/types/user.type";
import { FetchUsersRequestDto } from './dto/fetch-users.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UsersRepository) { }

    fetch(options: FetchUsersRequestDto): Promise<PaginatedResponse<User>> {
        return this.userRepository.fetch(options);
    }

}
