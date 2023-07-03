import { Request, Response, Router } from 'express';
import { routesConfig } from '../../utils/config';
import logger from '../../utils/logger';

import { validationCreateUser } from '../validators';
import { createUserController } from '../controllers';

const userRouter = Router(routesConfig);

// userRouter.get('/getUserByEmail', validationCreateUser, createUserController);

userRouter.post('/createUser', validationCreateUser, createUserController);

// userRouter.patch('/updateUser', [], (req: Request, res: Response) => {
// 	logger.info(req.url);
// 	return res.status(200).send(req.baseUrl);
// });

export { userRouter };
