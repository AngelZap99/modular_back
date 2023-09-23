import { body, header } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

// prettier-ignore
const createEmployeeMiddleware = [
	// First name
	body('first_name')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 50 }).withMessage(errMsg.strSize('2', '50')).bail(),
	// Last name 1
	body('last_name1')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 30 }).withMessage(errMsg.strSize('2', '30')).bail(),
	// Last name 2
	body('last_name2')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 30 }).withMessage(errMsg.strSize('2', '30')).bail(),
	// Daily salary
	body('daily_salary')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	// Admision date
	body('admision_date')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isDate().withMessage(errMsg.isDate).bail(),
	// TODO: Add custom validation for files
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { createEmployeeMiddleware };
