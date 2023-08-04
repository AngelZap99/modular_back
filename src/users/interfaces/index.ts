import { Role } from '@prisma/client';
import { File } from 'buffer';

export interface ICreateUserDto {
	nickname: string;
	email: string;
	password: string;
	role: Role;
	image?: File;
}

export interface IUpdateUserDto {
	nickname?: string;
	email?: string;
	password?: string;
	role?: Role;
	profile_image?: string;
}

export interface IUser {
	user_id: number;
	nickname: string;
	email: string;
	password: string;
	role: Role;
	profile_image: string;
	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
}
