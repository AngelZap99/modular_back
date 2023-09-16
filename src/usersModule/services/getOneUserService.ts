import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IUser } from '../interfaces';

const prisma = new PrismaClient();

async function getOneUserService(filter: string, res: Response) {
	try {
		const condition = isNaN(Number(filter))
			? { email: filter }
			: { user_id: Number(filter) };

		const user: IUser | null = await prisma.users
			.findUnique({ where: condition })
			.then((res) => res)
			.catch((err) => {
				throw new Error(err);
			});

		await prisma.$disconnect();
		return user;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { getOneUserService };
