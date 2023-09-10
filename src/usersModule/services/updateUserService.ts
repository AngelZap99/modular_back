import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

/* utils functions */
import { createCrypt } from '../../utils/encrypter';
import { ITokenProps } from '../../utils/authToken/createToken';
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
	const date = getActualDate();

	try {
		const updatedUser: IUser = await prisma.users.update({
			where: {
				user_id: idToUpdate
			},
			data: {
				...props,
				email: props.email?.toLowerCase(),
				password: props.password && (await createCrypt(props.password)),
				updated_date: date,
				updated_user_id: tokenData.user_id
			}
		});
		return updatedUser;
	} catch (err) {
		handlerServicesErrors(err, res);
	}
}

export { updatedUserService };
