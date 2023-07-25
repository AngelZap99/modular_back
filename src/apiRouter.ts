import { Router } from 'express';

//imports
import { authRouter } from './auth/routes';
import { userRouter } from './users/routes';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
