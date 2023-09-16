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

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function isUser(object: any): object is IUser {
	return (<IUser>object).user_id !== undefined;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function areUsers(object: any): object is IUser[] {
	return (<IUser[]>object)[0].user_id !== undefined
	;
}
