import { query } from 'express-validator';
import { errMsg, validateValidation } from '../../utils/middlewares';

// prettier-ignore
const loginMiddleware = [
	// Email
	query('email')
		.exists()
		.withMessage(errMsg.notExists)
		.bail()
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.bail()
		.isString()
		.withMessage(errMsg.isString)
		.bail()
		.isLength({ max: 50 })
		.withMessage(errMsg.strSize('N/A', '50'))
		.bail()
		.isEmail()
		.withMessage(errMsg.isEmail)
		.bail(),
	// Password
	query('password')
		.exists()
		.withMessage(errMsg.notExists)
		.bail()
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.bail()
		.isString()
		.withMessage(errMsg.isString)
		.bail()
		.isStrongPassword({
			minLength: 8,
			minUppercase: 0,
			minNumbers: 0,
			minLowercase: 0,
			minSymbols: 0
		})
		.withMessage(errMsg.isStrongPass)
		.bail(),
	validateValidation
];

export { loginMiddleware };
