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
		//
		// delete props.dataToken;
		const date = getActualDate();
		const { 
			admision_date, 
			daily_salary, 
			first_name, 
			last_name1, 
			last_name2 
		} = props;

		const createdEmployee: IEmployee = await prisma.employee.create({
			data: {
				daily_salary,
				first_name,
				last_name1,
				last_name2,
				status: true,
				admision_date: new Date(admision_date).toISOString(),
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
