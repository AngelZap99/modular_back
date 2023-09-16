import { Request, Response } from 'express';

import { areEmployees } from '../interfaces';
import { getAllEmployeesService } from '../services';

async function getAllEmployeesController(req: Request, res: Response) {
	const { skip = 0, take = 20 } = req.query;
	const employees = await getAllEmployeesService(
		Number(skip),
		Number(take),
		res
	);

	if (areEmployees(employees)) {
		const employeeList = employees.map((employee) => {
			const { first_name, last_name1, last_name2 } = employee;
			return {
				...employee,
				first_name: first_name.trim(),
				last_name1: last_name1.trim(),
				last_name2: last_name2.trim()
			};
		});

		return res.status(200).json(employeeList);
	} else {
		return employees;
	}
}

export { getAllEmployeesController };
