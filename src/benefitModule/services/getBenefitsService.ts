import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { handlerServicesErrors } from '../../utils/HandlerErrors';

import { IBenefit } from '../interfaces';

const prisma = new PrismaClient();

async function getBenefitsService(
	idToFind: number,
	skip: number = 0,
	take: number = 20,
	res: Response
) {
	try {
		const benefits: IBenefit[] | null = await prisma.benefits.findMany({
			where: {
				employee_id: idToFind
			},
			skip,
			take
		});

		await prisma.$disconnect();
		return benefits;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { getBenefitsService };
