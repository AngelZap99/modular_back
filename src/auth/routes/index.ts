import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { validationDtoLogin } from '../middlewares';

// CONTROLLERS
import { loginController } from '../controllers';

const authRouter = Router(routesConfig);

// AUTH USER
authRouter.get('/login', validationDtoLogin, loginController);

export { authRouter };
