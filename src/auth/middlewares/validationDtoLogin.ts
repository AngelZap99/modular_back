import { query } from 'express-validator';
import { errMsg, validateValidation } from '../../utils/middlewares';

const validationDtoLogin = [
	// Email
	query('email')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.isString()
		.withMessage(errMsg.isString)
		.isLength({
			max: 50
		})
		.withMessage(errMsg.strSize('N/A', '50'))
		.isEmail()
		.withMessage(errMsg.isEmail),
	// Password
	query('password')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.isString()
		.withMessage(errMsg.isString)
		.isStrongPassword({
			minLength: 8,
			minUppercase: 0,
			minNumbers: 0,
			minLowercase: 0,
			minSymbols: 0
		})
		.withMessage(errMsg.isStrongPass),
	validateValidation
];

export { validationDtoLogin };
