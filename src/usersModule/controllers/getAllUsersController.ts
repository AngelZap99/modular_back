import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import { getAllUsersService } from '../services';

async function getAllUsersController(req: Request, res: Response) {
	const { skip, take } = req.query;
	const users: IUser[] | undefined = await getAllUsersService(
		Number(skip),
		Number(take),
		res
	);

	if (users) {
		const userList = users.map((user) => {
			const { email, nickname } = user;
			return {
				...user,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			};
		});

		res.status(200).json(userList);
	}
}

export { getAllUsersController };
