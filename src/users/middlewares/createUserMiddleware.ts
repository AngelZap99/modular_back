import { body, header } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

const rolesOptions = ['INOPERATIVE', 'READ', 'WRITE', 'OVERWRITE'];

// prettier-ignore
const createUserMiddleware = [
	// Nickname
	body('nickname')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 5, max: 25 }).withMessage(errMsg.strSize('5', '25')).bail(),
	// Role
	body('role')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isIn(rolesOptions).withMessage(errMsg.isNotIn(rolesOptions)).bail(),
	// Email
	body('email')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ max: 50 }).withMessage(errMsg.strSize('N/A', '50')).bail()
		.isEmail().withMessage(errMsg.isEmail).bail(),
	// Password
	body('password')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isStrongPassword({
			minLength: 8,
			minUppercase: 1,
			minNumbers: 1,
			minLowercase: 1,
			minSymbols: 0
		}).withMessage(errMsg.isStrongPass).bail(),
	// TODO: Add custom validation for files
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { createUserMiddleware };
