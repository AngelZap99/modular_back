import { body } from 'express-validator';
import { errMsg, validateValidation } from '../../utils/middlewares';

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
	validateValidation
];

export { validationDtoCreateUser };
