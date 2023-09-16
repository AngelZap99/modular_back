import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { getActualDate } from '../../utils/date';

import { IEmployee } from '../interfaces';

const prisma = new PrismaClient();

async function deleteEmployeeService(
	idToDelete: number,
	updaterId: number,
	res: Response
) {
	try {
		const date = getActualDate();

		const deletedEmployee: IEmployee = await prisma.employee.update({
			data: {
				status: false,
				updated_date: date,
				updated_user_id: updaterId
			},
			where: {
				employee_id: idToDelete
			}
		});
		await prisma.$disconnect();
		return deletedEmployee;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { deleteEmployeeService };
