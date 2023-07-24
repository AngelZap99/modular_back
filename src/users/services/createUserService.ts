import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IUser, ICreateUserDto } from '../interfaces';

const prisma = new PrismaClient();

async function createUserService(
	props: ICreateUserDto,
	adminId: number,
	res: Response
) {
	try {
		const actualDate = new Date();
		const { role, email, nickname, password } = props;

		const createdUser: IUser = await prisma.users
			.create({
				data: {
					nickname,
					email,
					password,
					role,
					profile_image: ' ',
					created_date: actualDate,
					created_user_id: adminId,
					updated_date: actualDate,
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
