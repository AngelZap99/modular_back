import { Router } from 'express';

//imports
import { authRouter } from './authModule/routes';
import { userRouter } from './usersModule/routes';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
