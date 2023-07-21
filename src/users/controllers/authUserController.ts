import { Request, Response } from 'express';

import { authUserService } from '../services';

import { createToken } from '../../utils/authToken';

import { IAuthUser } from '../interfaces';

async function authUserController(req: Request, res: Response) {
	const authData: IAuthUser = req.body;
	const user = await authUserService(authData, res);

	if (user) {
		const { email, role, user_id, nickname } = user;
		const token = createToken({ email, role, user_id });

		res.status(200).json({
			token,
			user: {
				...user,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			}
		});
	} else {
		res.status(401).send('Invalid or incorrect credentials');
	}
}

export { authUserController };
