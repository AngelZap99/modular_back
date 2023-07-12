import { Role } from '@prisma/client';

export interface ICreateUser {
	nickname: string;
	role: Role;
	email: string;
	password: string;
}

export interface IUpdateUser {
	id: string;
	role?: Role;
	nickname?: string;
	email?: string;
	password?: string;
	profile_image?: string;
	updated_user_id: number | null;
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
