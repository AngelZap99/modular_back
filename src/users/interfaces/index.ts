import { Role } from '@prisma/client';

export interface IcreateUser {
	nickname: string;
	email: string;
	password: string;
}
export interface IUser {
	role: Role;
	nickname: string;
	email: string;
	password?: string;
	profile_image: string;
	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
	user_id: number;
}
