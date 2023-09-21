import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import {
	createEmployeeMiddleware,
	deleteEmployeeMiddleware,
	getAllEmployeeMiddleware,
	updateEmployeeMiddleware
} from '../middlewares';

// CONTROLLERS
import {
	createEmployeeController,
	deleteEmployeeController,
	getAllEmployeesController,
	updateEmployeeController
} from '../controllers';

const employeeRouter = Router(routesConfig);

// CREATE EMPLOYEE
employeeRouter.post(
	'/create',
	createEmployeeMiddleware,
	createEmployeeController
);

// GET EMPLOYEES
employeeRouter.get('/', getAllEmployeeMiddleware, getAllEmployeesController);

// GET EMPLOYEES
// employeeRouter.get('/', );

// UPDATE EMPLOYEE
employeeRouter.patch(
	'/update/:employee_id',
	updateEmployeeMiddleware,
	updateEmployeeController
);

// DELETE EMPLOYEE
employeeRouter.delete(
	'/delete/:employee_id',
	deleteEmployeeMiddleware,
	deleteEmployeeController
);

export { employeeRouter };
