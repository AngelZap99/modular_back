import { Request, Response } from 'express';
import logger from '../../utils/logger';

import { createUserService } from '../services/';
import { createToken } from '../../utils/authToken';

import { Role } from '@prisma/client';
import { IcreateUser, IUser } from '../interfaces';

async function createUserController(req: Request, res: Response) {
	const userData: IcreateUser = req.body;

	// const createdUser =

	// if (createdUser !== null) {
	// 	logger.info('An user has been created');
	// 	delete createdUser.password;
	// 	const token = createToken({
	// 		email: createdUser.email,
	// 		role: Role.USER,
	// 		user_id: createdUser.user_id!
	// 	});
	// 	return res.status(200).json({
	// 		token,
	// 		newUser: createdUser
	// 	});
	// }

	return res.status(500).json({ message: 'internal server error' });
}

export { createUserController };
