import { body, header } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

const rolesOptions = ['INOPERATIVE', 'READ', 'WRITE', 'OVERWRITE'];

const validationDtoCreateUser = [
	// Nickname
	body('nickname')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.isString()
		.withMessage(errMsg.isString)
		.isLength({
			min: 5,
			max: 25
		})
		.withMessage(errMsg.strSize('5', '25')),
	// Role
	body('role')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.isString()
		.withMessage(errMsg.isString)
		.isIn(rolesOptions)
		.withMessage(errMsg.isNotIn(rolesOptions)),
	// Email
	body('email')
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
	body('password')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty)
		.isString()
		.withMessage(errMsg.isString)
		.isStrongPassword({
			minLength: 8,
			minUppercase: 1,
			minNumbers: 1,
			minLowercase: 1,
			minSymbols: 0
		})
		.withMessage(errMsg.isStrongPass),
	header('Authorization')
		.exists()
		.withMessage(errMsg.notExists)
		.notEmpty()
		.withMessage(errMsg.notEmpty),
	validateToken,
	validateValidation
];

export { validationDtoCreateUser };
