import { Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';

import { IUser, IcreateUser } from '../interfaces';
import { handlerPrismaError } from '../../utils/HandlerPrimaErrors';

const prisma = new PrismaClient();

async function createUserService(props: IcreateUser, res: Response) {
	try {
		const actualDate = new Date();
		const { email, nickname, password } = props;

		const createdUser: IUser = await prisma.users
			.create({
				data: {
					nickname,
					email,
					password,
					role: Role.USER,
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
		const errPrisma = handlerPrismaError(err);
		return errPrisma ? { errPrisma } : { Message: 'unknown error' };
	}
}

export { createUserService };
