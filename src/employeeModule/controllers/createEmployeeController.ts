import { Request, Response } from 'express';

import { createEmployeeService } from '../services/';

import { ICreateEmployeeDto, isEmployee } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function createEmployeeController(req: Request, res: Response) {
	const { dataToken }: { dataToken: ITokenProps } = req.body;

	const data: ICreateEmployeeDto = req.body;

	const createdEmployee = await createEmployeeService(
		data,
		dataToken.user_id,
		res
	);

	if (isEmployee(createdEmployee)) {
		const { first_name, last_name1, last_name2 } = createdEmployee;
		return res.status(200).json({
			createdUser: {
				...createdEmployee,
				first_name: first_name.trim(),
				last_name1: last_name1.trim(),
				last_name2: last_name2.trim()
			}
		});
	} else {
		return createdEmployee;
	}
}

export { createEmployeeController };
