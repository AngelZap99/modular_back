import { Request, Response, NextFunction } from 'express';
import { getDataFromToken } from '../authToken';

/**
 * @description: Check if the token is valid
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 
 */
export function validateToken(req: Request, res: Response, next: NextFunction) {
	const token = req.headers['authorization'];
	if (token) {
		const dataToken = getDataFromToken(token);
		if (dataToken) {
			req.body = { ...req.body, dataToken };
			next();
		} else res.status(401).send('Invalid, expired, or incorrect token');
	} else res.status(401).send('No token provided');
}
