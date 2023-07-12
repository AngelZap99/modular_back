import { Prisma } from '@prisma/client';

function handlerPrismaError(e: any) {
	if (e instanceof Prisma.PrismaClientKnownRequestError) {
		switch (e.code) {
			case '2002': {
				return {
					message: 'duplicate unique value',
					status: 409,
					meta: e.meta
				};
			}
			default: {
				return {
					message: 'An error has occurred in this field',
					status: 400,
					meta: e.meta
				};
			}
		}
	} else {
		return { message: 'Internal server error', status: 500, meta: null };
	}
}

export { handlerPrismaError };
