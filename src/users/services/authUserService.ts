import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { compareCrypt } from '../../utils/encrypter';

import logger from '../../utils/logger';
import { handlerPrismaError } from '../../utils/HandlerPrismaErrors';

import { IUser, IAuthUser } from '../interfaces';

const prisma = new PrismaClient();

async function authUserService(props: IAuthUser, res: Response) {
	try {
		const { email, password } = props;
		const user: IUser | null = await prisma.users.findUnique({
			where: {
				email
			}
		});
		if (!user) {
			return null;
		} else {
			if (!(await compareCrypt(password, user.password))) {
				return null;
			}
			await prisma.$disconnect();
			return user;
		}
	} catch (err) {
		logger.error(err);
		const errPrisma = handlerPrismaError(err);
		res.status(errPrisma.status).json(errPrisma);
	}
}

export { authUserService };
