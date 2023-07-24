import { Role } from '@prisma/client';

export interface ICreateUserDto {
	nickname: string;
	role: Role;
	email: string;
	password: string;
}

export interface IUpdateUserDto {
	id: string;
	role?: Role;
	nickname?: string;
	email?: string;
	password?: string;
	profile_image?: string;
	updated_user_id: number;
}

export interface IUser {
	user_id: number;
	role: Role;
	nickname: string;
	email: string;
	password: string;
	profile_image: string;
	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
}
