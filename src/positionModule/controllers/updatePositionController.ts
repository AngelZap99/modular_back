import { Request, Response } from 'express';

import { updatedPositionService } from '../services';

import { IUpdatePositionDto, isPosition } from '../interfaces';
import { ITokenProps } from '../../utils/authToken';

async function updatePositionController(req: Request, res: Response) {
	const { position_id } = req.params;
	const { dataToken }: { dataToken: ITokenProps } = req.body;
	const data: IUpdatePositionDto = req.body;

	const updatedPosition = await updatedPositionService(
		data,
		Number(position_id),
		dataToken,
		res
	);

	if (isPosition(updatedPosition)) {
		const { name } = updatedPosition;
		return res.status(200).json({
			...updatedPosition,
			name: name.trim()
		});
	} else {
		return updatedPosition;
	}
}

export { updatePositionController };
