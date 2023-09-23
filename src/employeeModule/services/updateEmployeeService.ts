import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

/* utils functions */
import { ITokenProps } from '../../utils/authToken';
import { getActualDate } from '../../utils/date';
import { handlerServicesErrors } from '../../utils/HandlerErrors';

/*interfaces */
import { IEmployee, IUpdateEmployeeDto } from '../interfaces';

const prisma = new PrismaClient();

async function updatedEmployeeService(
	props: IUpdateEmployeeDto,
	idToUpdate: number,
	tokenData: ITokenProps,
	res: Response
) {
	const {
		admision_date,
		daily_salary,
		first_name,
		last_name1,
		last_name2,
		status
	} = props;
	const date = getActualDate();

	try {
		const updatedEmployee: IEmployee = await prisma.employee.update({
			where: {
				employee_id: idToUpdate
			},
			data: {
				admision_date,
				daily_salary,
				first_name,
				last_name1,
				last_name2,
				status,
				updated_date: date,
				updated_user_id: tokenData.user_id
			}
		});
		return updatedEmployee;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { updatedEmployeeService };
