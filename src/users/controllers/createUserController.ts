import { Request, Response } from 'express';

import { createUserService } from '../services/';
import logger from '../../utils/logger';

import { ICreateUserDto, IUser } from '../interfaces';

async function createUserController(req: Request, res: Response) {
	const { dataToken } = req.body;
	const userData: ICreateUserDto = req.body;

	const createdUser: IUser | undefined = await createUserService(
		userData,
		dataToken.user_id,
		res
	);

	if (createdUser) {
		const { email, nickname } = createdUser;
		logger.info('An user has been created');
		res.status(200).json({
			newUser: {
				...createdUser,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	}
}

export { createUserController };
