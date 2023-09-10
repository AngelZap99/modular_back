import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { createCrypt } from '../../utils/encrypter';
import { getActualDate } from '../../utils/date';

import { IUser, ICreateUserDto } from '../interfaces';

const prisma = new PrismaClient();

async function createUserService(
	props: ICreateUserDto,
	adminId: number,
	res: Response
) {
	try {
		const date = getActualDate();
		const { role, email, nickname, password } = props;

		const createdUser: IUser = await prisma.users
			.create({
				data: {
					nickname,
					email: email.toLowerCase(),
					password: await createCrypt(password),
					role,
					profile_image: ' ',
					created_date: date,
					created_user_id: adminId,
					updated_date: date,
					updated_user_id: adminId
				}
			})
			.then((res) => res);

		await prisma.$disconnect();
		return createdUser;
	} catch (err) {
		handlerServicesErrors(err, res);
	}
}

export { createUserService };
