import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { getActualDate } from '../../utils/date';

import { IBenefit, ICreateBenefitDto } from '../interfaces';

const prisma = new PrismaClient();

async function createBenefitService(
	props: ICreateBenefitDto,
	creatorId: number,
	res: Response
) {
	try {
		const date = getActualDate();

		const createdBenefit: IBenefit = await prisma.benefits.create({
			data: {
				...props,
				created_date: date,
				created_user_id: creatorId,
				updated_date: date,
				updated_user_id: creatorId
			}
		});
		await prisma.$disconnect();
		return createdBenefit;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { createBenefitService };
