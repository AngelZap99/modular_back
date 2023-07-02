import { Router } from 'express';
import { routesConfig } from '../../utils/config';

const userRouter = Router(routesConfig);

userRouter.get('/getUserByEmail', []);

userRouter.post('/createUser', []);

userRouter.patch('/updateUser/:id', []);

export { userRouter };
