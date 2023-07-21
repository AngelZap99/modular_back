import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { Role } from '@prisma/client';

interface ITokenProps {
	user_id: number;
	role: Role;
	email: string;
}

/**
 * @description Function to create a token, it will have 48h to life
 *
 * @returns {string}
 */
export function createToken(props: ITokenProps): string {
	const { user_id, role, email } = props;
	return jwt.sign({ user_id, role, email }, String(process.env.JWT_SECRET), {
		expiresIn: 60 * 60 * 12
	});
}
