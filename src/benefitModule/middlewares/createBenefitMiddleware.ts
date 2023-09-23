import { body, header } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';
import { BenefitsTypeAr } from '../interfaces';

// prettier-ignore
const createBenefitMiddleware = [
	// Type
	body('type')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isIn(BenefitsTypeAr).withMessage(errMsg.isNotIn(BenefitsTypeAr)).bail(),
	// Quantity
	body('quantity')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	// employee id
	body('employee_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isNumeric().withMessage(errMsg.isNumber).bail(),
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { createBenefitMiddleware };
