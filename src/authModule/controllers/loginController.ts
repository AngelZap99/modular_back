import { Request, Response } from 'express';
import { loginService } from '../services';
import { createToken } from '../../utils/authToken';
import { IAuthLoginDto } from '../interfaces';
import { isUser } from '../../usersModule/interfaces';

async function loginController(req: Request, res: Response) {
	const { email, password } = req.query;

	const data: IAuthLoginDto = {
		email: String(email),
		password: String(password)
	};

	const user = await loginService(data, res);

	if (!user) {
		res.status(401).send('Invalid or incorrect credentials');
	} else if (isUser(user)) {
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
		return user;
	}
}

export { loginController };
