import { Request, Response } from 'express';

import { createBenefitService } from '../services';

import { ICreateBenefitDto, isBenefit } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function createBenefitController(req: Request, res: Response) {
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data: ICreateBenefitDto = req.body;

	const createdBenefit = await createBenefitService(
		data,
		dataToken.user_id,
		res
	);

	if (isBenefit(createdBenefit)) {
		return res.status(200).json({
			...createdBenefit
		});
	} else {
		return createdBenefit;
	}
}

export { createBenefitController };
