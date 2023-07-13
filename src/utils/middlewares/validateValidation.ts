import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

function validateValidation(req: Request, res: Response, next: NextFunction) {
	try {
		validationResult(req).throw();
		return next();
	} catch (err) {
		res.status(400).send({
			...err!
		});
	}
}

export { validateValidation };
