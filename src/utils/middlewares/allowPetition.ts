import { Request, Response } from 'express';
import { ITokenProps } from '../authToken/';

export const rolesOptions = [
	'INOPERATIVE',
	'READ',
	'WRITE',
	'OVERWRITE',
	'ADMIN'
];

/**
 * @description: Check if the user has been authorized to perform this action.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @param {String} requireLevelAuth required level permissions to perform this action
 */
export function allowPetition(
	req: Request,
	res: Response,
	requireLevelAuth: string
) {
	const { dataToken }: { dataToken: ITokenProps } = req.body;

	const notAllowed = res.status(403).send(
		`Prohibited action:
				You do not have the necessary permissions to perform this action`
	);

	if (!rolesOptions.includes(requireLevelAuth)) {
		res.status(500).send(
			`Middleware error definition: 
			Please check the permission level for this request.`
		);
	}

	// switch (dataToken.role) {
	// 	case 'INOPERATIVE': {
	// 		return notAllowed;
	// 	}
	// 	case 'READ': {

	// 		if (requireLevelAuth === rolesOptions[0]) {
	// 			return notAllowed;
	// 		}
	// 	}
	// 	case 'WRITE': {
	// 		if (requireLevelAuth === rolesOptions[0]) {
	// 			return notAllowed;
	// 		}

	// 	}
	// 	case 'OVERWRITE': {
	// 		if (
	// 			requireLevelAuth === rolesOptions[0] ||
	// 			requireLevelAuth === rolesOptions[1]
	// 		) {
	// 			return notAllowed;
	// 		}

	// 	}
	// 	case 'ADMIN': {
	// 		if (
	// 			requireLevelAuth === rolesOptions[0] ||
	// 			requireLevelAuth === rolesOptions[1] ||
	// 			requireLevelAuth === rolesOptions[2]
	// 		) {
	// 			return notAllowed;
	// 		}

	// 	}
	// 	default: {
	// 		return res.status(500).send('Internal server error - Allow petitions');
	// 	}
	// }
	return true;
}
