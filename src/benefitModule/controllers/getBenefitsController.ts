import { Request, Response } from 'express';

import { areBenefits } from '../interfaces';
import { getBenefitsService } from '../services';

async function getBenefitsController(req: Request, res: Response) {
	const { benefit_id } = req.params;
	const benefits = await getBenefitsService(
		Number(benefit_id),
		res
	);

	if (areBenefits(benefits)) {
		return res.status(200).json(benefits);
	} else {
		return benefits;
	}
}

export { getBenefitsController };
