import { FetchUsersRequestDto } from './dto/fetch-users.dto';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma.service';
import { User } from "src/common/types/user.type";
import { PaginatedResponse } from 'src/common/responses/response.options';

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) { }

    async fetch(options: FetchUsersRequestDto): Promise<PaginatedResponse<User>> {
        const { take, skip } = options;
        const [total, items] = await this.prisma.$transaction([
            this.prisma.user.count(),
            this.prisma.user.findMany({
                skip,
                take
            }) as any
        ]);
        return { ...options, total, items };
    }
    get(id: string): Promise<User> {
        return this.prisma.user.findFirst({
            where: { id }
        }) as any;
    }

    create(user: User): Promise<User> {
        return this.prisma.user.create({
            data: user as any
        }) as any;
    }

    update(user: User, id: string): Promise<User> {
        return this.prisma.user.update({
            where: { id },
            data: user as any
        }) as any;
    }

    remove(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: { id }
        }) as any;
    }
}