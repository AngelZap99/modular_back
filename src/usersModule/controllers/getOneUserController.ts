import { Request, Response } from 'express';
import { isUser } from '../interfaces';
import { getOneUserService } from '../services';

async function getOneUserController(req: Request, res: Response) {
	const { filter } = req.params;

	const user = await getOneUserService(filter, res);

	if (!user) {
		return res.status(404).send('User not found');
	} else if (isUser(user)) {
		const { email, nickname } = user;
		return res.status(200).json({
			...user,
			password: undefined,
			email: email.trim(),
			nickname: nickname.trim()
		});
	} else {
		return user;
	}
}

export { getOneUserController };
