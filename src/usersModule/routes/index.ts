import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import {
	createUserMiddleware,
	updateUserMiddleware
	// disabledUserMiddleware
} from '../middlewares';

// CONTROLLERS
import {
	createUserController,
	updateUserController
	// disabledUserController
} from '../controllers';

const userRouter = Router(routesConfig);

// CREATE USER (ONLY ADMIN)
userRouter.post('/create', createUserMiddleware, createUserController);

// UPDATE USER (ADMIN | USER)
userRouter.patch(
	'/update/:user_id',
	updateUserMiddleware,
	updateUserController
);

// DISABLED USER (ADMIN)
// userRouter.patch('/disabled', disabledUserMiddleware, disabledUserController);

export { userRouter };
