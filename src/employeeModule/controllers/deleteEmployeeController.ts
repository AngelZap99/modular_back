import { Request, Response } from 'express';

import { deleteEmployeeService } from '../services/';

import { isEmployee } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateUserController(req: Request, res: Response) {
	const { user_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;

	const deletedEmployee = await deleteEmployeeService(
		Number(user_id),
		dataToken.user_id,
		res
	);

	if (isEmployee(deletedEmployee)) {
		const { first_name, last_name1, last_name2 } = deletedEmployee;
		return res.status(200).json({
			updatedUser: {
				...deletedEmployee,
				first_name: first_name.trim(),
				last_name1: last_name1.trim(),
				last_name2: last_name2.trim()
			}
		});
	} else {
		return deletedEmployee;
	}
}

export { updateUserController };
