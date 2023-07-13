import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { validationAuthUser, validationCreateUser } from '../validators';

// CONTROLLERS
import { authUserController, createUserController } from '../controllers';

const userRouter = Router(routesConfig);

userRouter.post('/authUser', validationAuthUser, authUserController);
// userRouter.get('/getUser', validationCreateUser, createUserController);
// userRouter.post('/createUser', validationCreateUser, createUserController);
// userRouter.patch('/updateUser', validationCreateUser, createUserController);

export { userRouter };
