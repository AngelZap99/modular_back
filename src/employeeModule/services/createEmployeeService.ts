import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { getActualDate } from '../../utils/date';

import { IEmployee, ICreateEmployeeDto } from '../interfaces';

const prisma = new PrismaClient();

async function createEmployeeService(
	props: ICreateEmployeeDto,
	creatorId: number,
	res: Response
) {
	try {
		const date = getActualDate();

		const createdEmployee: IEmployee = await prisma.employee.create({
			data: {
				...props,
				status: true,
				admision_date: props.admision_date,
				created_date: date,
				created_user_id: creatorId,
				updated_date: date,
				updated_user_id: creatorId
			}
		});
		await prisma.$disconnect();
		return createdEmployee;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { createEmployeeService };
