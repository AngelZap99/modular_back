import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { validationDtoAuthUser, validationDtoCreateUser } from '../validators';

// CONTROLLERS
import { authUserController, createUserController } from '../controllers';

const userRouter = Router(routesConfig);

// AUTH USER
userRouter.post('/authUser', validationDtoAuthUser, authUserController);
// CREATE USER (ONLY ADMIN)
userRouter.post('/createUser', validationDtoCreateUser, createUserController);

export { userRouter };
