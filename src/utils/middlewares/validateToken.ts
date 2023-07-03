import { Request, Response, NextFunction } from 'express';
import { getDataFromToken } from '../authToken';

/**
 * @description: Check if the token is valid
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response<any, Record<string, any>> | undefined} invoke next()
 */
export function validateToken(
	req: Request,
	res: Response,
	next: NextFunction
): Response<any, Record<string, any>> | undefined {
	const token = req.headers['authorization'];
	if (!token) return res.status(401).send('No token provided');

	const data = getDataFromToken(token);
	if (data) {
		req.body = { ...req.body, userToke: data };
		next();
	}
	return res.status(401).send('Invalid, expired, or incorrect token');
}
