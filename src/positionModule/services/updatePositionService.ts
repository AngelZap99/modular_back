import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

/* utils functions */
import { ITokenProps } from '../../utils/authToken';
import { getActualDate } from '../../utils/date';
import { handlerServicesErrors } from '../../utils/HandlerErrors';

/*interfaces */
import { IPosition, IUpdatePositionDto } from '../interfaces';

const prisma = new PrismaClient();

async function updatedPositionService(
	props: IUpdatePositionDto,
	idToUpdate: number,
	tokenData: ITokenProps,
	res: Response
) {
	const { daily_salary, name, status } = props;
	const date = getActualDate();

	try {
		const updatedPosition: IPosition = await prisma.position.update({
			where: {
				position_id: idToUpdate
			},
			data: {
				daily_salary,
				name,
				status,
				updated_date: date,
				updated_user_id: tokenData.user_id
			}
		});
		return updatedPosition;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { updatedPositionService };
