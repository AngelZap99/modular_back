import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { validationDtoCreateUser } from '../middlewares';

// CONTROLLERS
import { createUserController } from '../controllers';

const userRouter = Router(routesConfig);

// CREATE USER (ONLY ADMIN)
userRouter.post('/createUser', validationDtoCreateUser, createUserController);

export { userRouter };
