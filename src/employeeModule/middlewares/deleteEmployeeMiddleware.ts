import { header, param } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

// prettier-ignore
const deleteEmployeeMiddleware = [
	// employee_id
	param('employee_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isDecimal().withMessage(errMsg.isNumber).bail(),
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { deleteEmployeeMiddleware };
