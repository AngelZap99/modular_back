import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IEmployee } from '../interfaces';

const prisma = new PrismaClient();

async function getAllEmployeesService(
	skip: number = 0,
	take: number = 20,
	res: Response
) {
	try {
		const employee: IEmployee[] | null = await prisma.employee.findMany({
			skip,
			take
		});

		await prisma.$disconnect();
		return employee;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { getAllEmployeesService };
