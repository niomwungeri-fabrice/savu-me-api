import { MetaData } from './metadata.type';
export declare type User = {
    id?: string;
    email: number;
    phoneNumber: string;
    firstName?: string;
    lastName?: string;
    metadata?: MetaData;
};