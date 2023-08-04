import { Prisma } from '@prisma/client';
import { Response } from 'express';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function handlerPrismaError(e: any) {
	if (e instanceof Prisma.PrismaClientKnownRequestError) {
		switch (e.code) {
			case 'P2002': {
				return {
					message: 'duplicate unique value',
					status: 409,
					meta: e.meta
				};
			}
			case 'P2025': {
				return {
					message: 'This index was not found',
					status: 404,
					meta: e.meta
				};
			}
			default: {
				return {
					message: 'An error has occurred in a field',
					status: 400,
					data: e
				};
			}
		}
	}
	return null;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function handlerServicesErrors(err: any, res: Response) {
	const errPrisma = handlerPrismaError(err);
	errPrisma ? console.error(errPrisma) : console.error(err);
	errPrisma
		? res.status(errPrisma.status).json(errPrisma)
		: res.status(500).json('Internal server error');
}

export { handlerPrismaError, handlerServicesErrors };
