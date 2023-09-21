import { body, header, param } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

// prettier-ignore
const updateEmployeeMiddleware = [
	// employee_id
	param('employee_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isDecimal().withMessage(errMsg.isNumber).bail(),
	// First name
	body('firstName').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 50 }).withMessage(errMsg.strSize('2', '50')).bail(),
	// Last name 1
	body('last_name1').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 30 }).withMessage(errMsg.strSize('2', '30')).bail(),
	// Last name 2
	body('last_name2').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 30 }).withMessage(errMsg.strSize('2', '30')).bail(),
	// Password
	body('daily_salary').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	body('admision_date').optional()
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

export { updateEmployeeMiddleware };
