import 'dotenv/config';
import jwt, { JwtPayload } from 'jsonwebtoken';

/**
 * @description Function to get payload from token
 * @param {String} token
 *
 * @return {JwtPayload | string}
 */
export function getDataFromToken(token: string): JwtPayload | string {
	const tokenWithoutBearer = token.split(' ')[1];
	const data = jwt.verify(tokenWithoutBearer, String(process.env.JWT_SECRET), {
		maxAge: 68 * 68 * 48
	});

	return data;
}
