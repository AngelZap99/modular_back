import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

/* utils functions */
import { ITokenProps } from '../../utils/authToken';
import { getActualDate } from '../../utils/date';
import { handlerServicesErrors } from '../../utils/HandlerErrors';

/*interfaces */
import { IBenefit, IUpdateBenefitDto } from '../interfaces';

const prisma = new PrismaClient();

async function updatedBenefitService(
	props: IUpdateBenefitDto,
	idToUpdate: number,
	tokenData: ITokenProps,
	res: Response
) {
	const { quantity, type } = props;
	const date = getActualDate();

	try {
		const updatedBenefit: IBenefit = await prisma.benefits.update({
			where: {
				benefits_id: idToUpdate
			},
			data: {
				quantity,
				type,
				updated_date: date,
				updated_user_id: tokenData.user_id
			}
		});
		return updatedBenefit;
	} catch (err) {
		return handlerServicesErrors(err, res);
	}
}

export { updatedBenefitService };
