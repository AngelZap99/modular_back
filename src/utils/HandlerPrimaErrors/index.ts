import { Prisma } from '@prisma/client';

function handlerPrismaError(e: any) {
	if (e instanceof Prisma.PrismaClientKnownRequestError) {
		let error = { code: e.code, meta: e.meta };
		switch (e.code) {
			case '2002':
				return { name: 'Unique constraint failed', ...error };
			default:
				break;
		}
	} else return null;
}

export { handlerPrismaError };
