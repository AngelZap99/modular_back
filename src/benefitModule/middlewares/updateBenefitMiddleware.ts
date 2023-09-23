import { body, header, param } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';
import { BenefitsTypeAr } from '../interfaces';

// prettier-ignore
const updateBenefitMiddleware = [
	// user_id
	param('Benefit_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isDecimal().withMessage(errMsg.isNumber).bail(),
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
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { updateBenefitMiddleware };
