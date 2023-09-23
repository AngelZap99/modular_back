import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { getActualDate } from '../../utils/date';

import { ICreatePositionDto, IPosition } from '../interfaces';

const prisma = new PrismaClient();

async function createPositionService(
	props: ICreatePositionDto,
	creatorId: number,
	res: Response
) {
	try {
		const { daily_salary, employee_id, name, status } = props;
		const date = getActualDate();

		const createdPosition: IPosition = await prisma.position.create({
			data: {
				daily_salary,
				employee_id,
				name: name.trim(),
				status,
				created_date: date,
				created_user_id: creatorId,
				updated_date: date,
				updated_user_id: creatorId
			}
		});
		await prisma.$disconnect();
		return createdPosition;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { createPositionService };
