import { PrismaClient } from '@prisma/client';

import logger from '../../utils/logger';

import { IUser } from '../interfaces';

const prisma = new PrismaClient();

async function findUserService(userData: any) {
	try {
		const { email } = userData;

		const user: IUser | null = await prisma.users
			.findUnique({ where: { email: email } })
			.then((res) => res)
			.catch((err) => {
				throw new Error(err);
			});

		await prisma.$disconnect();
		return user;
	} catch (err) {
		logger.error(err);
		await prisma.$disconnect();
		return null;
	}
}

export { findUserService };
