import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { IUpdateUserDto, IUser } from '../../users/interfaces';

import { getActualDate } from '../../utils/date';

const prisma = new PrismaClient();

async function updatedUserService(
	props: IUpdateUserDto,
	user_id: number,
	updater_id: number,
	res: Response
) {
	const date = getActualDate();

	try {
		const updatedUser: IUser = await prisma.users.update({
			where: {
				user_id: user_id
			},
			data: {
				...props,
				updated_date: date,
				updated_user_id: updater_id
			}
		});
		return updatedUser;
	} catch (err) {
		handlerServicesErrors(err, res);
	}
}

export { updatedUserService };
