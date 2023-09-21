import { Request, Response } from 'express';

import { updatedUserService } from '../services/';
import logger from '../../utils/logger';

import { IUpdateUserDto, isUser } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateUserController(req: Request, res: Response) {
	const { user_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data: IUpdateUserDto = req.body;

	const updatedUser = await updatedUserService(
		data,
		Number(user_id),
		dataToken,
		res
	);

	if (isUser(updatedUser)) {
		const { email, nickname } = updatedUser;
		logger.info('An user has been updated');
		return res.status(200).json({
			updatedUser: {
				...updatedUser,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	} else {
		return updatedUser;
	}
}

export { updateUserController };
