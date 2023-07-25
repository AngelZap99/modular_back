import { Request, Response } from 'express';

import { loginService } from '../services';
import { IAuthLoginDto } from '../interfaces';
import { createToken } from '../../utils/authToken';

async function loginController(req: Request, res: Response) {
	const { email, password } = req.query;

	const data: IAuthLoginDto = {
		email: String(email),
		password: String(password)
	};
	
	const user = await loginService(data, res);

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

export { loginController };
