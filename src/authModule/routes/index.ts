import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import { loginMiddleware } from '../middlewares';

// CONTROLLERS
import { loginController } from '../controllers';

const authRouter = Router(routesConfig);

/**
 * @openapi
 * tags:
 * 	name: auth
 * 	description: Module for user authentication
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: john@example.com
 *               password: mypassword
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized - Invalid credentials
 */
authRouter.get('/login', loginMiddleware, loginController);

export { authRouter };
