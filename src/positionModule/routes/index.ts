import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import {
	createEmployeeMiddleware,
	updateEmployeeMiddleware
} from '../middlewares';

// CONTROLLERS
import {
	createPositionController,
	updatePositionController
} from '../controllers';

const positionRouter = Router(routesConfig);

// CREATE POSITION
positionRouter.post(
	'/create',
	createEmployeeMiddleware,
	createPositionController
);

// UPDATE POSITION
positionRouter.patch(
	'/update/:employee_id',
	updateEmployeeMiddleware,
	updatePositionController
);

export { positionRouter };
