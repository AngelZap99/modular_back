import { body, header, param } from 'express-validator';
import {
	errMsg,
	validateToken,
	validateValidation
} from '../../utils/middlewares';

// prettier-ignore
const updatePositionMiddleware = [
	// position_id
	param('position_id')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	// name
	body('name').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isString().withMessage(errMsg.isString).bail()
		.isLength({ min: 2, max: 40 }).withMessage(errMsg.strSize('2', '40')).bail(),
	// status
	body('status').optional()
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail()
		.isBoolean().withMessage(errMsg.isBoolen).bail(),
	// TODO: Add custom validation for files
	header('Authorization')
		.exists().withMessage(errMsg.notExists).bail()
		.notEmpty().withMessage(errMsg.notEmpty).bail(),
	validateToken,
	validateValidation
];

export { updatePositionMiddleware };
