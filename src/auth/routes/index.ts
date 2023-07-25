import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { loginMiddleware } from '../middlewares';

// CONTROLLERS
import { loginController } from '../controllers';

const authRouter = Router(routesConfig);

// AUTH USER
authRouter.get('/login', loginMiddleware, loginController);

export { authRouter };
