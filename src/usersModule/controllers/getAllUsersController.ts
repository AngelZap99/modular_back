import { Request, Response } from 'express';

import { areUsers } from '../interfaces';
import { getAllUsersService } from '../services';

async function getAllUsersController(req: Request, res: Response) {
	const { skip = 0, take = 20 } = req.query;
	const users = await getAllUsersService(Number(skip), Number(take), res);

	if (areUsers(users)) {
		const userList = users.map((user) => {
			const { email, nickname } = user;
			return {
				...user,
				password: undefined,
				email: email.trim(),
				nickname: nickname.trim()
			};
		});

		return res.status(200).json(userList);
	} else {
		return users;
	}
}

export { getAllUsersController };
