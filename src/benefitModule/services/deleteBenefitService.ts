import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';
import { getActualDate } from '../../utils/date';

import { IBenefit } from '../interfaces';

const prisma = new PrismaClient();

async function deleteBenefitService(
	idToDelete: number,
	updaterId: number,
	res: Response
) {
	try {
		const date = getActualDate();

		const deletedBenefit: IBenefit = await prisma.benefits.update({
			data: {
				updated_date: date,
				updated_user_id: updaterId
			},
			where: {
				benefits_id: idToDelete
			}
		});
		await prisma.$disconnect();
		return deletedBenefit;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { deleteBenefitService };
