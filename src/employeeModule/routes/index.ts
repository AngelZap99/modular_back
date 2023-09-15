import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
// import {} from '../middlewares';

// CONTROLLERS
// import {} from '../controllers';

const employeeRouter = Router(routesConfig);

// CREATE EMPLOYEE
employeeRouter.post('/create', () => {});

// GET ONE EMPLOYEE
employeeRouter.get('/:filter', () => {});

// GET EMPLOYEES
employeeRouter.get('/', () => {});

// DELETE EMPLOYEE
employeeRouter.patch('/update/:employee_id', () => {});

export { employeeRouter };
