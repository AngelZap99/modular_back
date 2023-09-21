import { Request, Response } from 'express';

import { updatedEmployeeService } from '../services/';

import { IUpdateEmployeeDto, isEmployee } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateEmployeeController(req: Request, res: Response) {
	const { employee_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data:IUpdateEmployeeDto = req.body;

	const updatedEmployee = await updatedEmployeeService(
		data,
		Number(employee_id),
		dataToken,
		res
	);

	if (isEmployee(updatedEmployee)) {
		const { first_name, last_name1, last_name2 } = updatedEmployee;
		return res.status(200).json({
			...updatedEmployee,
			first_name: first_name.trim(),
			last_name1: last_name1.trim(),
			last_name2: last_name2.trim()
		});
	} else {
		return updatedEmployee;
	}
}

export { updateEmployeeController };
