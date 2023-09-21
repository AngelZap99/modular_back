import { Router } from 'express';
import { routesConfig } from '../../utils/config';

//VALIDATIONS
import {
	createBenefitMiddleware,
	deleteBenefitMiddleware,
	getAllBenefitMiddleware,
	updateBenefitMiddleware
} from '../middlewares';

// CONTROLLERS
import {
	createBenefitController,
	deleteBenefitController,
	getBenefitsController,
	updateBenefitController
} from '../controllers';

const benefitRouter = Router(routesConfig);

// CREATE BENEFIT
benefitRouter.post('/create', createBenefitMiddleware, createBenefitController);

// GET BENEFITS
benefitRouter.get('/:benefit_id', getAllBenefitMiddleware, getBenefitsController);

// UPDATE BENEFIT
benefitRouter.patch(
	'/update/:benefit_id',
	updateBenefitMiddleware,
	updateBenefitController
);

// DELETE BENEFIT
benefitRouter.delete(
	'/delete/:benefit_id',
	deleteBenefitMiddleware,
	deleteBenefitController
);

export { benefitRouter };
