import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { compareCrypt } from '../../utils/encrypter';
import { handlerPrismaError } from '../../utils/HandlerPrimaErrors';
import logger from '../../utils/logger';

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
			res.status(401).send('Invalid or incorrect credentials');
		} else {
			if (!compareCrypt(password, user.password)) {
				res.status(401).send('Invalid or incorrect credentials');
			}
		}

		await prisma.$disconnect();
		return user;
	} catch (err) {
		logger.error(err);
		const errPrisma = handlerPrismaError(err);
		res.status(errPrisma.status).json(errPrisma);
	}
}

export { authUserService };
