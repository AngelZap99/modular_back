import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import { getOneUserService } from '../services';

async function getOneUserController(req: Request, res: Response) {
	const { filter } = req.query;

	const user: IUser | null | undefined = await getOneUserService(
		String(filter),
		res
	);

	if (user) {
		const { email, nickname } = user;
		res.status(200).json({
			...user,
			password: undefined,
			email: email.trim(),
			nickname: nickname.trim()
		});
	}
}

export { getOneUserController };
