import { body, header, param } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

const rolesOptions = ['INOPERATIVE', 'READ', 'WRITE', 'OVERWRITE'];

// prettier-ignore
const updateUserMiddleware = [
	// user_id
	param('user_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isDecimal().withMessage(errMsg.isNumber).bail(),
	// Nickname
	body('nickname').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 5, max: 25 }).withMessage(errMsg.strSize('5', '25')).bail(),
    // Email
    body('email').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ max: 50 }).withMessage(errMsg.strSize('N/A', '50')).bail()
		.isEmail().withMessage(errMsg.isEmail).bail(),
    // Password
    body('password').optional()
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
    // Role
    body('role').optional()
      .exists().withMessage(errMsg.notExists).bail()
      .notEmpty().withMessage(errMsg.notEmpty).bail()
      .isString().withMessage(errMsg.isString).bail()
      .isIn(rolesOptions).withMessage(errMsg.isNotIn(rolesOptions)).bail(),
  // TODO: Add custom validation for files
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { updateUserMiddleware };
