import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import {
	createPositionMiddleware,
	updatePositionMiddleware
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
	createPositionMiddleware,
	createPositionController
);

// UPDATE POSITION
positionRouter.patch(
	'/update/:position_id',
	updatePositionMiddleware,
	updatePositionController
);

export { positionRouter };
