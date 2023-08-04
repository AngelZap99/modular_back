import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { compareCrypt } from '../../utils/encrypter';
import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { IAuthLoginDto } from '../interfaces';
import { IUser } from '../../users/interfaces';

const prisma = new PrismaClient();

async function loginService(props: IAuthLoginDto, res: Response) {
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
		handlerServicesErrors(err, res);
	}
}

export { loginService };
