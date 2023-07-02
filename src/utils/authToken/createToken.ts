import 'dotenv/config';
import jwt from 'jsonwebtoken';

interface ITokenProps {
	user_id: number;
	role: string;
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
		algorithm: 'ES512',
		expiresIn: 3600 * 48
	});
}
