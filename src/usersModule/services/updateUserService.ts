import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

/* utils functions */
import { createCrypt } from '../../utils/encrypter';
import { ITokenProps } from '../../utils/authToken/';
import { getActualDate } from '../../utils/date';
import { handlerServicesErrors } from '../../utils/HandlerErrors';

/*interfaces */
import { IUpdateUserDto, IUser } from '../interfaces';

const prisma = new PrismaClient();

async function updatedUserService(
	props: IUpdateUserDto,
	idToUpdate: number,
	tokenData: ITokenProps,
	res: Response
) {
	const { email, nickname, password, role } = props;
	const date = getActualDate();

	try {
		const updatedUser: IUser = await prisma.users.update({
			where: {
				user_id: idToUpdate
			},
			data: {
				email: email?.toLowerCase(),
				nickname,
				password: password && (await createCrypt(password)),
				role,
				updated_date: date,
				updated_user_id: tokenData.user_id
			}
		});
		return updatedUser;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { updatedUserService };
