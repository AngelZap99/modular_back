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
	const date = getActualDate();

	try {
		const updatedEmployee: IEmployee = await prisma.employee.update({
			where: {
				employee_id: idToUpdate
			},
			data: {
				...props,
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
