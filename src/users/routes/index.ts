import { Router } from 'express';
import { routesConfig } from '../../utils/config';

import { validationCreateUser } from '../validators';
import { createUserController } from '../controllers';

const userRouter = Router(routesConfig);

userRouter.get('/getUser', validationCreateUser, createUserController);
userRouter.post('/createUser', validationCreateUser, createUserController);
userRouter.patch('/updateUser', validationCreateUser, createUserController);

export { userRouter };
