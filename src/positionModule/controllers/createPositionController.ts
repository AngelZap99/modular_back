import { Request, Response } from 'express';

import { createPositionService } from '../services';

import { ICreatePositionDto, isPosition } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function createPositionController(req: Request, res: Response) {
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data: ICreatePositionDto = req.body;

	const createdPosition = await createPositionService(
		data,
		dataToken.user_id,
		res
	);

	if (isPosition(createdPosition)) {
		const { name } = createdPosition;
		return res.status(200).json({
			...createdPosition,
			name: name.trim()
		});
	} else {
		return createdPosition;
	}
}

export { createPositionController };
