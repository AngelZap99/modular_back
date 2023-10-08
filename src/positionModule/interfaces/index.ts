export interface ICreatePositionDto {
	name: string;
	status: boolean;
	employee_id: number;
}

export interface IUpdatePositionDto {
	name: string;
	status: boolean;
}

export interface IPosition {
	position_id: number;
	name: string;
	status: boolean;

	employee_id: number;

	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function isPosition(object: any): object is IPosition {
	return (<IPosition>object).position_id !== undefined;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function arePositions(object: any): object is IPosition[] {
	return (<IPosition[]>object).length
		? (<IPosition[]>object)[0].position_id !== undefined
		: object;
}
