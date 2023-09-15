import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IUser } from '../interfaces';

const prisma = new PrismaClient();

async function getAllUsersService(
	skip: number = 0,
	take: number = 20,
	res: Response
) {
	try {
		const user: IUser[] | null = await prisma.users.findMany({
			where: {
				role: { not: 'ADMIN' }
			},
			skip,
			take
		});

		await prisma.$disconnect();
		return user;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { getAllUsersService };
