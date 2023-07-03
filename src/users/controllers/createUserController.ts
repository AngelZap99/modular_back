import { Request, Response } from 'express';
import logger from '../../utils/logger';

function createUserController(req: Request, res: Response) {
	logger.info(req.url);
	return res.status(200).send(req.baseUrl);
}

export { createUserController };
