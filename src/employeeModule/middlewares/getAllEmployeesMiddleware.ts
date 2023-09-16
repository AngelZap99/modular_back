import { header, query } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

// prettier-ignore
const getAllEmployeeMiddleware = [
	// Email
	query('skip')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	// Password
	query('take')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { getAllEmployeeMiddleware };
