import { Request, Response } from 'express';

import { updatedBenefitService } from '../services';

import { IUpdateBenefitDto, isBenefit } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updateBenefitController(req: Request, res: Response) {
	const { benefit_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data: IUpdateBenefitDto = req.body;

	const updatedBenefit = await updatedBenefitService(
		data,
		Number(benefit_id),
		dataToken,
		res
	);

	if (isBenefit(updatedBenefit)) {
		return res.status(200).json({
			updatedBenefit
		});
	} else {
		return updatedBenefit;
	}
}

export { updateBenefitController };
