import { Request, Response } from 'express';

import { authUserService } from '../services';
import { IAuthUser } from '../interfaces';
import { createToken } from '../../utils/authToken';

async function authUserController(req: Request, res: Response) {
	const authData: IAuthUser = req.body;
	const user = await authUserService(authData, res);

	if (user) {
		const { email, role, user_id } = user;
		const token = createToken({ email, role, user_id });

		res.status(200).json({
			token,
			user: {
				...user,
				password: null
			}
		});
	} else {
		res.status(401).send('Invalid or incorrect credentials');
	}
}

export { authUserController };
