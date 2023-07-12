import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { IUser, ICreateUser } from '../interfaces';
import { handlerPrismaError } from '../../utils/HandlerPrimaErrors';
import logger from '../../utils/logger';

const prisma = new PrismaClient();

async function createUserService(props: ICreateUser, res: Response) {
	try {
		const actualDate = new Date();
		const { role, email, nickname, password } = props;

		const createdUser: IUser = await prisma.users
			.create({
				data: {
					nickname,
					email,
					password,
					role: role,
					profile_image: ' ',
					created_date: actualDate,
					created_user_id: 0,
					updated_date: actualDate,
					updated_user_id: 0
				}
			})
			.then((res) => res);

		await prisma.$disconnect();
		return createdUser;
	} catch (err) {
		logger.error(err);
		const errPrisma = handlerPrismaError(err);
		res.status(errPrisma.status).json(errPrisma);
	}
}

export { createUserService };
