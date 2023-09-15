import { Request, Response } from 'express';

import { createUserService } from '../services/';
import logger from '../../utils/logger';

import { ICreateUserDto, isUser } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function createUserController(req: Request, res: Response) {
	const { dataToken }: { dataToken: ITokenProps } = req.body;

	const data: ICreateUserDto = req.body;

	const createdUser = await createUserService(data, dataToken.user_id, res);

	if (isUser(createdUser)) {
		const { email, nickname } = createdUser;

		logger.info('An user has been created');
		return res.status(200).json({
			createdUser: {
				...createdUser,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	} else {
		return createdUser;
	}
}

export { createUserController };
