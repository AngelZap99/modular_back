import { Router } from 'express';

//imports
import { authRouter } from './authModule/routes';
import { employeeRouter } from './employeeModule/routes';
import { positionRouter } from './positionModule/routes';
import { userRouter } from './usersModule/routes';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/employees', employeeRouter);
apiRouter.use('/position', positionRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
