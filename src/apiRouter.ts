import { Router } from 'express';

//imports
import { authRouter } from './authModule/routes';
import { userRouter } from './usersModule/routes';
import { employeeRouter } from './employeeModule/routes';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/employees', employeeRouter);

export default apiRouter;
