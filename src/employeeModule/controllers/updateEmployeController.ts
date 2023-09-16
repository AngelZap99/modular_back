import { Request, Response } from 'express';

import { updatedEmployeeService } from '../services/';
import logger from '../../utils/logger';

import { isEmployee } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateUserController(req: Request, res: Response) {
	const { user_id } = req.params;
	const { dataToken, ...data }: { dataToken: ITokenProps } = req.body;

	const updatedEmployee = await updatedEmployeeService(
		data,
		Number(user_id),
		dataToken,
		res
	);

	if (isEmployee(updatedEmployee)) {
		const { first_name, last_name1, last_name2 } = updatedEmployee;
		logger.info('An user has been updated');
		return res.status(200).json({
			updatedUser: {
				...updatedEmployee,
				first_name: first_name.trim(),
				last_name1: last_name1.trim(),
				last_name2: last_name2.trim()
			}
		});
	} else {
		return updatedEmployee;
	}
}

export { updateUserController };
