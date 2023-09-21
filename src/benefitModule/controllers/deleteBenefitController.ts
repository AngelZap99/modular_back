import { Request, Response } from 'express';

import { deleteBenefitService } from '../services';

import { isBenefit } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function deleteBenefitController(req: Request, res: Response) {
	const { benefit_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;

	const deletedBenefit = await deleteBenefitService(
		Number(benefit_id),
		dataToken.user_id,
		res
	);

	if (isBenefit(deletedBenefit)) {
		return res.status(200).json({
			...deletedBenefit
		});
	} else {
		return deletedBenefit;
	}
}

export { deleteBenefitController };
