import { Request, Response } from 'express';

import { updatedUserService } from '../services/';
import logger from '../../utils/logger';

import { IUser } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateUserController(req: Request, res: Response) {
	const { user_id } = req.params;
	const { dataToken, ...data }: { dataToken: ITokenProps } = req.body;

	const updatedUser: IUser | undefined = await updatedUserService(
		data,
		Number(user_id),
		dataToken,
		res
	);

	if (updatedUser) {
		const { email, nickname } = updatedUser;
		logger.info('An user has been updated');
		res.status(200).json({
			updatedUser: {
				...updatedUser,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	}
}

export { updateUserController };
