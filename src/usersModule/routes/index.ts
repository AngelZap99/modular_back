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
	getAllUsersController,
	getOneUserController,
	updateUserController
} from '../controllers';

const userRouter = Router(routesConfig);

// CREATE USER (ONLY ADMIN)
userRouter.post('/create', createUserMiddleware, createUserController);

// GET ONE USER BY ID OR EMAIL
userRouter.get('/:filter', getOneUserController);

// GET USERS
userRouter.get('/', getAllUsersController);

// UPDATE USER (ADMIN | USER)
userRouter.patch(
	'/update/:user_id',
	updateUserMiddleware,
	updateUserController
);

// DISABLED USER (ADMIN)
// userRouter.patch('/disabled', disabledUserMiddleware, disabledUserController);

export { userRouter };
