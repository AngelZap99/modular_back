import { Request, Response } from 'express';

import { updatedUserService } from '../services/';
import logger from '../../utils/logger';

import { IUser } from '../interfaces';

async function updateUserController(req: Request, res: Response) {
	const { user_id } = req.params;
	const { dataToken, ...data } = req.body;
	const { user_id: updater_id } = dataToken;

	const updatedUser: IUser | undefined = await updatedUserService(
		data,
		Number(user_id),
		updater_id,
		res
	);

	if (updatedUser) {
		const { email, nickname } = updatedUser;
		logger.info('An user has been updated');
		res.status(200).json({
			newUser: {
				...updatedUser,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	}
}

export { updateUserController };