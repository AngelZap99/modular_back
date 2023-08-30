import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IUser } from '../interfaces';

const prisma = new PrismaClient();

async function getOneUserService(filter: string | number, res: Response) {
	try {
		const condition =
			typeof filter === 'string' ? { email: filter } : { user_id: filter };

		const user: IUser | null = await prisma.users
			.findUnique({ where: condition })
			.then((res) => res)
			.catch((err) => {
				throw new Error(err);
			});

		await prisma.$disconnect();
		return user;
	} catch (err) {
		handlerServicesErrors(err, res);
	}
}

export { getOneUserService };
